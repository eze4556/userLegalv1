import { IonItem, IonButton, IonLabel, IonInput, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonList, IonCardContent, IonHeader, IonButtons, IonTitle, IonBackButton, IonToolbar } from '@ionic/angular/standalone';
import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../../common/services/firestore.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cert-ingresos',
  templateUrl: './cert-ingresos.component.html',
  styleUrls: ['./cert-ingresos.component.scss'],
  standalone: true,
  imports: [IonToolbar, IonBackButton, IonTitle, IonButtons, IonHeader, IonItem, IonInput, IonLabel, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonList, IonCardContent, CommonModule, FormsModule],
})
export class CertIngresosComponent implements OnInit {
  userId: string;
  uniqueYears: string[] = [];
  selectedYear: string | null = null;
  pdfs$: Observable<any[]> | null = null;

  constructor(private firestoreService: FirestoreService) {}

  async ngOnInit() {
    this.userId = localStorage.getItem('userId');
    if (this.userId) {
      this.uniqueYears = await this.firestoreService.getUniqueYears(this.userId);
      console.log('Años únicos obtenidos:', this.uniqueYears); // Depuración
    } else {
      console.error('No se encontró userId en localStorage');
    }
  }

  onYearClick(year: string) {
    this.selectedYear = year;
    this.pdfs$ = this.firestoreService.getCertificacionIngresosByYear(this.userId, year);
    this.pdfs$.subscribe(pdfs => {
      console.log('PDFs para el año ' + year, pdfs); // Depuración
    });
  }
}
