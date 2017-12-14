import { ProfilePage } from './../modules/business/profile/profile';
import { OrderPage } from './../modules/business/order/order';
import { ProductPage } from './../modules/business/product/product';
import { MenuPage } from './../modules/business/menu/menu';
import { RegisterPage } from './../modules/membership/register/register';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { PartnersPage } from '../modules/home/partners/partners';
import { ListPage } from '../modules/list/list';
import { WelcomePage } from '../modules/membership/welcome/welcome';
import { SecurityPage } from '../modules/membership/security/security';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ApiService } from './../shared/services/api.service';

@NgModule({
  declarations: [
    MyApp,
    PartnersPage,
    ListPage,
    WelcomePage,
    SecurityPage,
    RegisterPage,
    MenuPage,
    OrderPage,
    ProfilePage,
    ProductPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PartnersPage,
    ListPage,
    WelcomePage,
    SecurityPage,
    RegisterPage,
    MenuPage,
    OrderPage,
    ProfilePage,
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiService
  ]
})
export class AppModule {}
