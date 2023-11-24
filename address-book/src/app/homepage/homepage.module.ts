import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { FormsModule } from '@angular/forms';
import { AddcontactComponent } from '../addcontact/addcontact.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FormsModule
  ]
})
export class HomepageModule {}
