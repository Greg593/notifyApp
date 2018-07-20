import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BusesPage } from '../pages/buses/buses';
import { ForgottenpswPage } from '../pages/forgottenpsw/forgottenpsw';
import { HistoryPage } from '../pages/history/history';
import { LoginPage } from '../pages/login/login';
import { UpdateprofilePage } from '../pages/updateprofile/updateprofile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    UpdateprofilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    UpdateprofilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
