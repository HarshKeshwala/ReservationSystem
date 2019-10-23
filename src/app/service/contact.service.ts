import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { map } from "rxjs/operators";

import { Contact } from '../model/ contact';

@Injectable()
export class ContactService {

    constructor(private _httpservice: Http){}

    // method to get all the contacts from database using api endpoint
    getAllContacts(): Observable<Contact[]> {
        return this._httpservice.get("http://localhost:8080/ReservationApi/contact")
        .pipe(map(response => response.json()));
    }

    //method to add contact to the database using api endpoint

    addContact(contact: Contact) {
        console.log(contact.birthDate);
        let body = JSON.stringify(contact);
        let headers = new Headers({'Content-Type': 'appliation/json'});
        let options = new RequestOptions({headers: headers});

        return this._httpservice.post("http://localhost:8080/ReservationApi/contact", body, options);
    }

    deleteContact(contactId: string) {
        return this._httpservice.delete("http://localhost:8080/ReservationApi/contact/"+contactId);
    }

    getSingleContact(contactId: string) {
        return this._httpservice.get("http://localhost:8080/ReservationApi/contact/"+contactId)
        .pipe(map(response => response.json()));
    }


}