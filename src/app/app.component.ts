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
     this.redirectToAddContact();
  }
  title = 'ReservationApi';

  contact = new Contact();
  contacts: Contact[];

  constructor(private _contactService: ContactService, private router: Router){}


  redirectToAddContact(): void {
    this.router.navigate(['/show']);
  }

}
