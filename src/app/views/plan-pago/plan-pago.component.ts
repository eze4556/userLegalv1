import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonTitle, IonButtons, IonToolbar, IonBackButton, IonHeader, IonGrid, IonRow, IonCol, IonSpinner } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../common/services/firestore.service';
import { Storage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-plan-pago',
  templateUrl: './plan-pago.component.html',
  styleUrls: ['./plan-pago.component.scss'],
  standalone: true,
  imports: [IonSpinner, IonCol, IonRow, IonGrid, IonHeader, IonBackButton, IonToolbar, IonButtons, IonTitle, CommonModule, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent]
})
export class PlanPagoComponent implements OnInit {
  planPagoDocs$: Observable<any[]>;
  userId: string;

  constructor(
    private firestoreService: FirestoreService,
    private storage: Storage,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId'); // Asume que el userId se almacena en localStorage
    this.loadPlanPago();
  }

  loadPlanPago() {
    const path = `Usuarios/${this.userId}/planPago`;
    this.planPagoDocs$ = this.firestoreService.getCollectionChanges(path);
  }

  getSanitizedUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
