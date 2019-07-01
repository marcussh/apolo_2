import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthPage } from '../pages/auth/auth';
import { ComponentsModule } from '../components/components.module';
import { DadosFirebaseProvider } from '../providers/dados-firebase/dados-firebase';
import { DadosAlunosProvider } from '../providers/dados-alunos/dados-alunos';

const config = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCUroGnlkzHKkBRy5MYiq74snURqar3ERY',
    authDomain: 'apolo-19fee.firebaseapp.com',
    databaseURL: 'https://apolo-19fee.firebaseio.com',
    projectId: 'apolo-19fee',
    storageBucket: 'apolo-19fee.appspot.com',
    messagingSenderId: '439325195923'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config.firebase),
    AngularFireDatabaseModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    AngularFirestoreModule.enablePersistence(),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DadosFirebaseProvider,
    DadosAlunosProvider
    
  ]
})
export class AppModule {}
