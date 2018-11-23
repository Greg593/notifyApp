import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import {IonicStorageModule} from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BusesPage } from '../pages/buses/buses';
import { ForgottenpswPage } from '../pages/forgottenpsw/forgottenpsw';
import { HistoryPage } from '../pages/history/history';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { SignupPage } from '../pages/signup/signup';
import { UpdateprofilePage } from '../pages/updateprofile/updateprofile';
import { DetallebusPage } from '../pages/detallebus/detallebus';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { BusesProvider } from '../providers/buses/buses';
import { HistorialProvider } from '../providers/historial/historial';
import { DataProvider } from '../providers/data/data';
import { AlertasProvider } from '../providers/alertas/alertas';
import { AlertaUserProvider } from '../providers/alerta-user/alerta-user';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BusesPage,
    ForgottenpswPage,
    HistoryPage,
    LoginPage,
    SignupPage,
    UpdateprofilePage,
    LogoutPage,
    DetallebusPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages:false,
      swipeBackEnabled: true 
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BusesPage,
    ForgottenpswPage,
    HistoryPage,
    LoginPage,
    SignupPage,
    UpdateprofilePage,
    LogoutPage,
    DetallebusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UsuariosProvider,
    BusesProvider,
    HistorialProvider,
    DataProvider,
    AlertasProvider,
    AlertaUserProvider
  ]
})
export class AppModule {}
