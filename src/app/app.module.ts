import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
// import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FcmService } from './shared/service/fcm.service';

const config = {
  apiKey: 'AIzaSyAGC3iiA4sbw5YKgYL9i0RMXLelBFfBFtg',
  authDomain: 'ionic-push-notifications-81a15.firebaseapp.com',
  databaseURL: 'https://ionic-push-notifications-81a15.firebaseio.com',
  projectId: 'ionic-push-notifications-81a15',
  storageBucket: 'ionic-push-notifications-81a15.appspot.com',
  messagingSenderId: '262059065499',
  appId: '1:262059065499:web:67b655c0ae0edabd8c863e',
  measurementId: 'G-V86LMNCR0D'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FcmService,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
