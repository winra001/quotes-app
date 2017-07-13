import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from "../pages/tabs/tabs";
import { FavoritesPage } from "../pages/favorites/favorites";
import { LibraryPage } from "../pages/library/library";
import { QuoteService } from "../services/quote.service";
import { QuotePage } from "../pages/quote/quote";
import { SettingsPage } from "../pages/settings/settings";

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    TabsPage,
    QuotePage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    TabsPage,
    QuotePage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuoteService
  ]
})
export class AppModule {}
