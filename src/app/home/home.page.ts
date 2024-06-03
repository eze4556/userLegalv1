import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonItem, IonCard, IonInput, IonSpinner, IonButtons, IonButton, IonIcon, IonImg, IonCol, IonRow, IonBackButton, IonGrid } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { IoniconsModule } from '../common/modules/ionicons.module';
import { Router } from '@angular/router';


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




  constructor(private router: Router) {

  }

  navigateToCertificacion() {
    this.router.navigate(['/certificacion']);
  }

  navigateToFacturacion() {
    this.router.navigate(['/facturacion']);
  }

  navigateToPlanPago() {
    this.router.navigate(['/planpago']);
  }

  navigateToReciboSueldo() {
    this.router.navigate(['/recibosueldo']);
  }
}
