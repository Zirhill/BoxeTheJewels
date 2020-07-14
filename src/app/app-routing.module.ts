import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { JustforYouComponent } from './justfor-you/justfor-you.component';
import { DetailBagueComponent } from './detail-bague/detail-bague.component';


const routes: Routes = [
  {path:"", component: PresentationComponent},
  {path:"gallery", component: GalleryComponent},
  {path:"gallery/detail", component: DetailBagueComponent},
  {path:"JustforYou", component: JustforYouComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
