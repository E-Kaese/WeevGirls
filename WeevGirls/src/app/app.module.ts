import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { NgxResponsiveEmbedModule } from 'ngx-responsive-embed';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    NgxResponsiveEmbedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
