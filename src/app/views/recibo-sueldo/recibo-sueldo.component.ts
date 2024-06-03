import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../common/services/firestore.service';
import { Storage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-recibo-sueldo',
  templateUrl: './recibo-sueldo.component.html',
  styleUrls: ['./recibo-sueldo.component.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent]
})
export class ReciboSueldoComponent implements OnInit {
  reciboSueldoDocs$: Observable<any[]>;
  userId: string;

  constructor(
    private firestoreService: FirestoreService,
    private storage: Storage,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId'); // Asume que el userId se almacena en localStorage
    this.loadReciboSueldo();
  }

  loadReciboSueldo() {
    const path = `Usuarios/${this.userId}/sueldos`;
    this.reciboSueldoDocs$ = this.firestoreService.getCollectionChanges(path);
  }

  getSanitizedUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
