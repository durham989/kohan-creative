import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireLiteAuth, AngularFireLiteDatabase, AngularFireLiteFirestore } from 'angularfire-lite';

@Component({
  selector: 'kohan-contact-us',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactUsComponent implements OnInit {
  public message: string;
  public fireStoreData: any;
  public contactData: any;
  public contactUsForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    practiceName: new FormControl('', Validators.required),
    contactUsMessage: new FormControl('')
  });
  public endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/contactUsEmail';

  constructor(private router: Router,
    public ngxSmartModalService: NgxSmartModalService,
    public db: AngularFireLiteDatabase,
    public auth: AngularFireLiteAuth,
    public fireStore: AngularFireLiteFirestore,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.message = 'Hello';
    this.auth.signinAnonymously();
    this.fireStore.read('contacts').subscribe((data) => {
      this.fireStoreData = data;
    });
  }

  navigateToPage(route) {
    this.router.navigate([route]);
  }

  saveContactInformation() {
    var contactInfo = {
      firstName: this.contactUsForm.get('firstName').value,
      lastName: this.contactUsForm.get('lastName').value,
      email: this.contactUsForm.get('email').value,
      practiceName: this.contactUsForm.get('practiceName').value,
      contactUsMessage: this.contactUsForm.get('contactUsMessage').value
    };
    
    this.fireStore.push('contact-us',contactInfo).subscribe(
      data => {
        this.contactData = data;
        console.log(this.contactData);
        this.sendEmailToKohan();
        this.ngxSmartModalService.getModal('myModal').close();
      },
      error => {
        console.error(error);
        this.ngxSmartModalService.getModal('myModal').close();
      }
    );
  }

  sendEmailToKohan() {
    const apiHeaders = new HttpHeaders({
      'Content-Type':  'application/json'
    });

    const contactUsInfo = {
      firstName: this.contactUsForm.get('firstName').value,
      lastName: this.contactUsForm.get('lastName').value,
      email: this.contactUsForm.get('email').value,
      practiceName: this.contactUsForm.get('practiceName').value,
      contactUsMessage: this.contactUsForm.get('contactUsMessage').value
    }
    
    const data = {
      toEmail: 'sfarrugia@kohaninc.com',
      toName: 'Sabina Farrugia',
      leadFirstName: contactUsInfo.firstName,
      leadLastName: contactUsInfo.lastName,
      leadEmailAddress: contactUsInfo.email,
      leadPracticeName: contactUsInfo.practiceName,
      contactUsMessage: contactUsInfo.contactUsMessage
    }

    this.httpClient.post(this.endpoint, data, {headers: apiHeaders}).subscribe();
  }
}
