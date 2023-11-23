import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcontactRoutingModule } from './addcontact-routing.module';
import { AddcontactComponent } from './addcontact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddcontactComponent],
  imports: [
    CommonModule,
    AddcontactRoutingModule,
    FormsModule
  ]
})
export class AddcontactModule { }
