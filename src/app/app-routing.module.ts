import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGalleryComponent } from './my-gallery/my-gallery.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ {
  path: 'gallery/:id', component: MyGalleryComponent
},{
  path: '**', component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
