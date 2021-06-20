import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { NormalUserComponent } from './normal-user.component';


const routes: Routes = [
  {
    path: "",
    component: NormalUserComponent,
    children: [
      {
        path: "images",
        component: ImagesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormalUserRoutingModule { }
