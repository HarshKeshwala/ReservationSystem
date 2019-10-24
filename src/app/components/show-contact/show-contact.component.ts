import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/ contact';
import { ContactService } from 'src/app/service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css']
})
export class ShowContactComponent implements OnInit {

  contact = new Contact();
  contacts: Contact[];

  constructor(private _contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this._contactService.getAllContacts()
    .subscribe((contacts) => {
        this.contacts = contacts,
        console.log(contacts)
    }, (error) => {
        console.log(error);
    }) 
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
}
