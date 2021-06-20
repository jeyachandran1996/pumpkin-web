import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributorComponent } from './contributor.component';
import { ReportComponent } from './report/report.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  {
    path: "",
    component: ContributorComponent,
    children: [
      {
        path: "upload",
        component: UploadComponent
      },
      {
        path: "report",
        component: ReportComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContributorRoutingModule { }
