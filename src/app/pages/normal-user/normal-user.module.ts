import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalUserRoutingModule } from './normal-user-routing.module';
import { NormalUserComponent } from './normal-user.component';
import { ImagesComponent } from './images/images.component';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [NormalUserComponent, ImagesComponent],
  imports: [
    CommonModule,
    NormalUserRoutingModule,
    MaterialModule,
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbMenuModule,
    NbCardModule,
    NbCheckboxModule
  ]
})
export class NormalUserModule { }
