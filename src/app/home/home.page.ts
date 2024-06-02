import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonItem, IonCard, IonInput, IonSpinner, IonButtons, IonButton, IonIcon, IonImg, IonCol, IonRow, IonBackButton, IonGrid } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { IoniconsModule } from '../common/modules/ionicons.module';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonGrid, IonBackButton, IonRow, IonCol, IonImg, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput,
    IonIcon, IonButton, IonButtons, IonSpinner, IonInput, IonCard,
    FormsModule,
    IoniconsModule
  ],
})
export class HomePage {




  constructor( private router: Router,
    private alertController: AlertController,) {

  }

   async logout() {

    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    this.router.navigateByUrl('/login');
    this.mostrarAlerta('Sesión cerrada correctamente.');
  }


  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'se ha cerrado la sesión',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  navigateToCertificacion() {
    this.router.navigate(['/certificacion']);
  }
}
