import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';

import { HttpModule } from '@angular/http';
import { ContactService } from './service/contact.service';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

const routes: Routes = [
  {
    path: 'add-contact',
    component: AddContactComponent
  },
  {
    path: 'edit-contact',
    component: EditContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
