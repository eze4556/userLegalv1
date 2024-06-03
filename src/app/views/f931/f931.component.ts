import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonList,
  IonItem,
  IonCard,
  IonInput,
  IonSpinner,
  IonButtons,
  IonButton,
  IonIcon,
  IonImg,
  IonCol,
  IonRow,
  IonBackButton,
  IonGrid,
  IonCardHeader,
  IonCardTitle,
  IonCardContent

} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { IoniconsModule } from '../../common/modules/ionicons.module';
import { FirestoreService } from 'src/app/common/services/firestore.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController,    IonicModule } from '@ionic/angular';
import * as bcrypt from 'bcryptjs';
import { Auth } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-f931',
  templateUrl: './f931.component.html',
  styleUrls: ['./f931.component.scss'],
  standalone: true,
  imports: [
    IonGrid,
    IonBackButton,
    IonRow,
    IonCol,
    IonImg,
    IonList,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonIcon,
    IonButton,
    IonButtons,
    IonSpinner,
    IonInput,
    IonCard,
    FormsModule,
    IoniconsModule,
    ReactiveFormsModule,
    CommonModule,
    IonCardHeader,
      IonCardTitle,
      IonCardContent
  ],
})
export class F931Component implements OnInit {
  userId: string;
  f931: any;
  pdfs: any[];



  constructor(private firestoreService: FirestoreService) {}

    async ngOnInit() {
    this.userId = localStorage.getItem('userId');
    if (this.userId) {
      this.f931 = await this.firestoreService.getF931(this.userId);
      this.pdfs = await this.firestoreService.getF931(this.userId);
      console.log('PDFs de f931:', this.pdfs);
    } else {
      console.error('No se encontró userId en localStorage');
    }
  }

  verPdf(url: string) {
  window.open(url, '_blank');
}


}
