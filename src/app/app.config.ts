import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {provideNativeDateAdapter} from "@angular/material/core";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(
      {"projectId":"ng-firebase-todo-app-ae34e",
        "appId":"1:1003424487865:web:989a27fa8ec33efa6d3e68",
        "storageBucket":"ng-firebase-todo-app-ae34e.firebasestorage.app",
        "apiKey":"AIzaSyB9vSDJ2JPFkst0MGcHUhYx-ihoVKCWU1w",
        "authDomain":"ng-firebase-todo-app-ae34e.firebaseapp.com",
        "messagingSenderId":"1003424487865"
      })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
    provideNativeDateAdapter()
  ]
};
