import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user/user.component';
import { PagesComponent } from './pages.component';
import { AddUserComponent } from './user/add-user/add-user.component';


@NgModule({
  declarations: [
    UserComponent,
    PagesComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
