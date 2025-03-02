import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: 'Home page'},
  {path: 'about', component: AboutComponent, title: 'About page'},
  {path: 'album', component: AlbumComponent, title: 'Album page'},
  {path: 'Album/:id', component: AlbumDetailComponent, title: 'Album-detail page'},
  {path: 'album/:id/:photos', component: AlbumPhotosComponent, title: 'Album-photos page'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
