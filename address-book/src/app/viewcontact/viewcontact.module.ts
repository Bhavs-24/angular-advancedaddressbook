import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewcontactRoutingModule } from './viewcontact-routing.module';
import { ViewcontactComponent } from './viewcontact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewcontactComponent],
  imports: [
    CommonModule,
    ViewcontactRoutingModule,
    FormsModule
  ]
})
export class ViewcontactModule { }
