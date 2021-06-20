import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "contributor",
    loadChildren: () => import("./contributor/contributor.module").then(m => m.ContributorModule)
  },
  {
    path: "user",
    loadChildren: () => import("./normal-user/normal-user.module").then(m => m.NormalUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
