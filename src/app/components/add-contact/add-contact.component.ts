import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/ contact';
import { ContactService } from 'src/app/service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact = new Contact();
  
  constructor(private _contactService: ContactService, private router: Router) { }

  ngOnInit() {
  }

  addContact(): void {
    this._contactService.addContact(this.contact)
      .subscribe(
        (response) => {console.log(response);
                    this.router.navigate(['/show']);
                      },
        (error) => {console.log(error);}
      );
  }
}
