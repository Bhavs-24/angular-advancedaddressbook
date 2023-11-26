import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { AddcontactModule } from './addcontact/addcontact.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AddcontactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
