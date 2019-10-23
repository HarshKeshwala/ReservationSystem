import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/ contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact = new Contact();
  constructor(private _contactService: ContactService) { }
  
  ngOnInit() {
  }

  addContact(): void {
      this._contactService.addContact(this.contact)
        .subscribe(
          (response) => {console.log(response)},
          (error) => {console.log(error);}
        );
  }
}
