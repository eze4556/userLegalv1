import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonItem, IonCard, IonInput, IonSpinner, IonButtons, IonButton, IonIcon, IonImg, IonCol, IonRow, IonBackButton, IonGrid } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { IoniconsModule } from '../../common/modules/ionicons.module';
import { FirestoreService } from 'src/app/common/services/firestore.service';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import * as bcrypt from 'bcryptjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonGrid, IonBackButton, IonRow, IonCol, IonImg, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput,
    IonIcon, IonButton, IonButtons, IonSpinner, IonInput, IonCard,
    FormsModule,
    IoniconsModule,
    ReactiveFormsModule
  ],
})
export class LoginComponent  {

  loginForm: FormGroup;
  email: string = '';
  password: string = '';
  loginError: boolean = false;
  loginSuccess: boolean = false;

constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private alertController: AlertController,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      dni: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


 async login() {
    if (this.loginForm.valid) {
      const { dni, password } = this.loginForm.value;

      try {
        const credentials = await this.firestoreService.getUserCredentials(dni);

        if (credentials) {
          const validPassword = await bcrypt.compare(password, credentials.password);

          if (validPassword) {
            console.log('Inicio de sesión exitoso:', credentials);
            this.loginSuccess = true;
            await this.mostrarAlerta('Éxito', 'Inicio de sesión exitoso.');


            localStorage.setItem('user', JSON.stringify(credentials));

            setTimeout(() => {
              this.router.navigateByUrl('/home');
            }, 1000); 
          } else {
            this.loginError = true;
            this.mostrarAlertaError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
          }
        } else {
          this.loginError = true;
          this.mostrarAlertaError('Usuario no encontrado.');
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        this.mostrarAlertaError('Ocurrió un error al iniciar sesión.');
      }
    } else {
      this.mostrarAlertaError('Por favor, completa todos los campos correctamente.');
    }
  }

  // Función para mostrar una alerta de error
  async mostrarAlertaError(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Función para mostrar una alerta de éxito
  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}





