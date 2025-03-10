import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { environment } from 'src/environments/environment';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { provideDatabase } from '@angular/fire/database';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ 
    provide: RouteReuseStrategy, useClass: IonicRouteStrategy,
  },
  provideAnimations(),
  provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  provideNgxMask(),
  provideFirestore(() => getFirestore()),
  provideDatabase(() => getDatabase())],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
