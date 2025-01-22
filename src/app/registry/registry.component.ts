import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  deleteField,
  FieldValue,
} from 'firebase/firestore';
import { Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAFPUA2R_8vG2GNjiLhEHOhOWyc_HNN4LA',
  authDomain: 'tos-backend.firebaseapp.com',
  projectId: 'tos-backend',
  storageBucket: 'tos-backend.appspot.com',
  messagingSenderId: '798322278812',
  appId: '1:798322278812:web:67329d87abeb805b540859',
  measurementId: 'G-Q6Q887MVQC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

@Component({
  selector: 'app-registry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registry.component.html',
  styleUrl: './registry.component.css',
})
export class RegistryComponent {
  newname: string | undefined;
  removeinput: any;
  names: any = [];
  currentname: string = 'ERROR - UNAUTHORIZED ACCESS';
  displayNames: any[] = [];
  newId: number = 0;
  addName() {
    if (this.newname) {
      const docRef = doc(db, 'tos-db', 'namelist');
      this.newId = this.displayNames.length++;
      updateDoc(docRef, {
        [this.newId]: this.newname,
      });
      // koska päivitys vaikea niin paikallinen push päälle
      this.displayNames.push(this.newname);
      this.newname = '';
    }
  }
  deleteName() {}
  constructor() {}

  async ngOnInit() {
    // hae lista
    const docRef = doc(db, 'tos-db', 'namelist');
    const docSnap: any = await getDoc(docRef);
    this.names.push(docSnap.data());

    // nimet listasta
    this.names.forEach(
      (name: { [s: string]: unknown } | ArrayLike<unknown>) => {
        const values = Object.values(name);
        this.displayNames.push(...values);
      }
    );

    setInterval(() => {
      // satunnainen nimi listasta
      const randomIndex = Math.floor(Math.random() * this.names.length);
      const randomObject = this.names[randomIndex];
      const objectKeys = Object.keys(randomObject);
      const randomKey =
        objectKeys[Math.floor(Math.random() * objectKeys.length)];
      const randomValue = randomObject[randomKey];
      this.currentname = randomValue + '.csv';
    }, 1500);
  }
}
