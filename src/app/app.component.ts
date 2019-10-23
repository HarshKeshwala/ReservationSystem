import { Component, OnInit } from '@angular/core';

import { Contact } from './model/ contact';
import { ContactService } from './service/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.getContacts();
  }
  title = 'ReservationApi';

  contacts: Contact[];

  constructor(private _contactService: ContactService){}

  getContacts(): void {
      this._contactService.getAllContacts()
      .subscribe((contacts) => {
          this.contacts = contacts,
          console.log(contacts)
      }, (error) => {
          console.log(error);
      }) 
  }
}
