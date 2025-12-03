import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "clinic-e62d6", appId: "1:852188150122:web:bec85091174cced63a8d13", storageBucket: "clinic-e62d6.firebasestorage.app", apiKey: "AIzaSyBal_1yNSktIx8u0uLWrTtRqPVDv1xOtCY", authDomain: "clinic-e62d6.firebaseapp.com", messagingSenderId: "852188150122"})), provideFirestore(() => getFirestore())
  ]
};
