import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire'; // from firebase
import { environment } from '../environments/environment'; // Firebase config
import { AngularFirestoreModule } from '@angular/fire/firestore'; // from firebase

import { UserOwnerProfileService } from './services/user-owner-profile.service'; // service made by me


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            AngularFireModule.initializeApp(environment.firebase, 'boarding-hunt'),
            AngularFirestoreModule
          ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserOwnerProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
