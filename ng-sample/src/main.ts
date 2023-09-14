import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { onCLS, onFID, onLCP, onFCP, onINP, onTTFB } from 'web-vitals';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  onCLS(sendToAnalytics);
  onFID(sendToAnalytics);
  onLCP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onINP(sendToAnalytics);
  onTTFB(sendToAnalytics);
  function sendToAnalytics(metric: object) {
      console.log(metric);
      const body = JSON.stringify(metric);

      (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
          fetch('/analytics', { body, method: 'POST', keepalive: true });

  }
