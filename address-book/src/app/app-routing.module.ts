import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path:'homepage',
    component:HomepageComponent,
    children: [
      {
        path: 'addcontact/:id',
        loadChildren: () => import('./addcontact/addcontact.module').then(m => m.AddcontactModule),
      },
      {
       path:'viewcontact/:id',
        loadChildren:()=>import('./viewcontact/viewcontact.module').then(m=>m.ViewcontactModule),
      },
      {
        path:'editcontact/:id',
         loadChildren:()=>import('./editcontact/editcontact.module').then(m=>m.EditcontactModule),
       },
  ],
  },
  {
    path:'**',
    redirectTo:'homepage',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
