import { Component, OnInit } from '@angular/core';

import { Contact } from './model/ contact';
import { ContactService } from './service/contact.service';

import { Router } from '@angular/router';

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

  contact = new Contact();
  contacts: Contact[];

  constructor(private _contactService: ContactService, private router: Router){}

  getContacts(): void {
      this._contactService.getAllContacts()
      .subscribe((contacts) => {
          this.contacts = contacts,
          console.log(contacts)
      }, (error) => {
          console.log(error);
      }) 
  }

  addContact(): void {
    this._contactService.addContact(this.contact)
      .subscribe(
        (response) => {console.log(response)},
        (error) => {console.log(error);}
      );
  }

  deleteContact(contactId: string) {
    this._contactService.deleteContact(contactId)
      .subscribe(
        (response) => { console.log(response);
                        this.getContacts();
                      },
        (error) => {
                    console.log(error);
                  }
      )
    }

  getSingleContact(contactId: string) {
      this._contactService.getSingleContact(contactId)
        .subscribe(
            (contact) => {
                      this.contact = contact;
                    },
            (error) => {
                    console.log(error);
                  }
        )
    }

  redirectToAddContact(): void {
    this.router.navigate(['/add-contact']);
  }

}
