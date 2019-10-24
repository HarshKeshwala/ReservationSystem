import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { ContactService } from './service/contact.service';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ShowContactComponent } from './components/show-contact/show-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    EditContactComponent,
    ShowContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'add', component: AddContactComponent },
      { path: 'edit/:contactId', component: EditContactComponent },
      { path: 'show', component: ShowContactComponent}
    ])
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
