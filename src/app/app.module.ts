import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { JustforYouComponent } from './justfor-you/justfor-you.component';
import { DetailBagueComponent } from './detail-bague/detail-bague.component';


@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    NavigationComponent,
    FooterComponent,
    GalleryComponent,
    JustforYouComponent,
    DetailBagueComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
