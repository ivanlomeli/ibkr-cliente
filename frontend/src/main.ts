import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { ApiProxyInterceptor } from './app/core/interceptors/api-proxy.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    { provide: HTTP_INTERCEPTORS, useClass: ApiProxyInterceptor, multi: true },
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
  ]
}).catch(err => console.error(err));
