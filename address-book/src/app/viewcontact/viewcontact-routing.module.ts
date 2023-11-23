import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewcontactComponent } from './viewcontact.component';

const routes: Routes = [
  {
    path:'',
    component:ViewcontactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewcontactRoutingModule { }
