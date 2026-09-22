import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

console.log('Zone.js loaded, starting bootstrap');

bootstrapApplication(AppComponent)
  .then(() => console.log('✓ App bootstrapped'))
  .catch(err => {
    console.error('✗ Bootstrap failed:', err);
    const root = document.querySelector('app-root');
    if (root) {
      root.innerHTML = `<div style="color:red;padding:20px;font-family:monospace;white-space:pre-wrap;">
Bootstrap Error: ${err}
      </div>`;
    }
  });