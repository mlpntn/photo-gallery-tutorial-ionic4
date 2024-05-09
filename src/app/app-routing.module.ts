import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/homepage/homepage.module#HomepagePageModule' },
  { path: 'about-us', loadChildren: './pages/about-us/about-us.module#AboutUsPageModule' },
  { path: 'faq', loadChildren: './pages/faq/faq.module#FaqPageModule' },
  { path: 'wedding-details', loadChildren: './pages/wedding-details/wedding-details.module#WeddingDetailsPageModule' },
  { path: 'rsvp', loadChildren: './pages/rsvp/rsvp.module#RsvpPageModule' },
  { path: 'gallery', loadChildren: './pages/gallery/gallery.module#GalleryPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
