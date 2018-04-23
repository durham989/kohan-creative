import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {
  
  private contactUrl = 'api/contacts';  // URL to web api
  
  constructor(
    private http: HttpClient,
    @Optional() @Inject(APP_BASE_HREF) origin: string) {
      this.contactUrl = `${origin}${this.contactUrl}`;
    }

  getContacts() {
    const apiHeaders = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    return this.http.get('api/contacts', {headers: apiHeaders});
  }

  addFlaggedPost(postId,flaggedPost,authToken) {
    const apiHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + authToken
    });
    return this.http.post('api/v1/posts/' + postId + '/flag', flaggedPost, {headers: apiHeaders});
  }
  
}