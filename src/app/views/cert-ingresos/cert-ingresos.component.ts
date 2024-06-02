import { IonItem, IonButton, IonLabel, IonInput, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonList, IonCardContent } from '@ionic/angular/standalone';
import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../../common/services/firestore.service'; // Ajusta la ruta según tu proyecto
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cert-ingresos',
  templateUrl: './cert-ingresos.component.html',
  styleUrls: ['./cert-ingresos.component.scss'],
  standalone: true,
  imports: [IonItem, IonInput, IonLabel, IonContent, IonGrid, IonRow,IonCol, IonCard,IonCardHeader, IonCardTitle, IonList,
   IonInput, IonCardContent ,CommonModule, FormsModule
  ],
})
export class CertIngresosComponent  implements OnInit {
  // @Input() userId: string;
  userId= "97f4a136-7c8d-41e9-9b9f-f85fdfd24e86";
  filterYear: string;
  filteredCertificaciones: any[] = [];

  constructor(private firestoreService: FirestoreService) {}
  uniqueYears: string[] = [];
  selectedYear: string | null = null;
  pdfs$: Observable<any[]> | null = null;

  async ngOnInit() {
    try {
      const userId = (await this.firestoreService.getAuthUser()).uid;
      this.uniqueYears = await this.firestoreService.getUniqueYears(userId);
      console.log('Años únicos obtenidos:', this.uniqueYears); // Depuración
    } catch (error) {
      console.error('Error obteniendo años únicos:', error);
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
