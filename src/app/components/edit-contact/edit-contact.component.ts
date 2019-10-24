import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/model/ contact';
import { ContactService } from 'src/app/service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact = new Contact();
  _id: string; //variable to store contactId from parameters

  constructor(private route: ActivatedRoute, private _contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('contactId');
    this.getSingleContact(this._id);
     // console.log(this._id);
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

  updateContact(contactId:string) {
      this._contactService.updateContact(contactId, this.contact)
      .subscribe(
        (response) => {console.log(response);
                    this.router.navigate(['/show']);
                      },
        (error) => {console.log(error);}
      );
  }
}
