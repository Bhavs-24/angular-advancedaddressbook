import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { AddcontactComponent } from './addcontact.component';

const routes: Routes = [
    {
      path:'',
      component:AddcontactComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddcontactRoutingModule { }
