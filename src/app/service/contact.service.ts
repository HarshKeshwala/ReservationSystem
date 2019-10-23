import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { map } from "rxjs/operators";

import { Contact } from '../model/ contact';

@Injectable()
export class ContactService {

    constructor(private _httpservice: Http){}

    getAllContacts(): Observable<Contact[]> {
        return this._httpservice.get("http://localhost:8080/ReservationApi/contact")
        .pipe(map(res => res.json()));
    }
}