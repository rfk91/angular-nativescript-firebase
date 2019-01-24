import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppComponent } from './app.component';

const firebase = require('nativescript-plugin-firebase');
firebase
  .init()
  .then(() => console.log(`Firebase initialized!`))
  .catch(error => console.log(`Firebase init error:`, error));

@NgModule({
  imports: [NativeScriptModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
