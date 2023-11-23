import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewcontactRoutingModule } from './viewcontact-routing.module';
import { ViewcontactComponent } from './viewcontact.component';


@NgModule({
  declarations: [ViewcontactComponent],
  imports: [
    CommonModule,
    ViewcontactRoutingModule
  ]
})
export class ViewcontactModule { }
