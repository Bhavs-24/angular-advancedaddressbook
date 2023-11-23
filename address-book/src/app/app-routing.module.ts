import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'homepage',
    loadChildren:()=>import('./homepage/homepage.module').then(m=>m.HomepageModule)
  },
  {
    path:'addcontact/:id',
    loadChildren:()=>import('./addcontact/addcontact.module').then(m=>m.AddcontactModule)
  },
  {
    path:'viewcontact/:id',
    loadChildren:()=>import('./viewcontact/viewcontact.module').then(m=>m.ViewcontactModule)
  },
  {
    path:'editcontact/:id',
    loadChildren:()=>import('./editcontact/editcontact.module').then(m=>m.EditcontactModule)
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
