import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { isDevMode } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    if ('serviceWorker' in navigator && !isDevMode()) {
      navigator.serviceWorker
        .register('/ngsw-worker.js')
        .then((registration) =>
          console.log('Service Worker registered', registration)
        )
        .catch((err) =>
          console.error('Service Worker registration failed:', err)
        );
    }
  })
  .catch((err) => console.error('Application bootstrap failed:', err));
