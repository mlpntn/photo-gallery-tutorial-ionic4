import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/homepage/homepage.module#HomepagePageModule' },
  { path: 'gallery', loadChildren: './pages/gallery/gallery.module#GalleryPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
