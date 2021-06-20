import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributorRoutingModule } from './contributor-routing.module';
import { ContributorComponent } from './contributor.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { UploadComponent } from './upload/upload.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [ ContributorComponent, UploadComponent, ReportComponent],
  imports: [
    CommonModule,
    ContributorRoutingModule,
    MaterialModule,
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbMenuModule,
    NbCardModule
  ],
})
export class ContributorModule { }
