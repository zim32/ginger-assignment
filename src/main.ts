import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, ExceptionHandler } from '@angular/core';
import { AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

class MyExceptionHandler extends ExceptionHandler {
  call(error, stackTrace = null, reason = null) {
    alert("Unhandled exception. Sorry");
  }
}

if (environment.production) {
  enableProdMode();
}

enableProdMode();

bootstrap(AppComponent, [HTTP_PROVIDERS]);
