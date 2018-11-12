import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { NgxResponsiveEmbedModule } from 'ngx-responsive-embed';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeevMaterialModule } from './material';
import { BannerComponent } from './banner/banner.component';
import { DatabaseService } from './services/database.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { PopularVideosComponent } from './popular-videos/popular-videos.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { FilteredContentComponent } from './filtered-content/filtered-content.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBjYD3A5xqxrzk_gPK9b_zCA8Q0CFvn0_I',
  authDomain: 'weev-girls.firebaseapp.com',
  databaseURL: 'https://weev-girls.firebaseio.com',
  projectId: 'weev-girls',
  storageBucket: 'weev-girls.appspot.com',
  messagingSenderId: '122898403314'
};

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    AboutComponent,
    PopularVideosComponent,
    ComingSoonComponent,
    FilteredContentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    WeevMaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule,
    YoutubePlayerModule,
    NgxResponsiveEmbedModule,
  ],
  providers: [AngularFireDatabaseModule, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
