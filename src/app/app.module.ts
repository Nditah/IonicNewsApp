import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { NewsListPage } from '../pages/news-list/news-list';
import { NewsService } from '../providers/news-service/news-service';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { PopoverPage } from '../pages/popover/popover';

@NgModule({
  declarations: [
    MyApp,
    NewsListPage,
    NewsDetailPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsListPage,
    NewsDetailPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsService
  ]
})
export class AppModule {}
