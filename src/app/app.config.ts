import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"tos-backend","appId":"1:798322278812:web:67329d87abeb805b540859","storageBucket":"tos-backend.appspot.com","apiKey":"AIzaSyAFPUA2R_8vG2GNjiLhEHOhOWyc_HNN4LA","authDomain":"tos-backend.firebaseapp.com","messagingSenderId":"798322278812","measurementId":"G-Q6Q887MVQC"})), provideFirestore(() => getFirestore())]
};
