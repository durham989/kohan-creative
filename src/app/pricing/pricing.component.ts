import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireLiteAuth, AngularFireLiteDatabase, AngularFireLiteFirestore } from 'angularfire-lite';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'kohan-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})

export class PricingComponent implements OnInit {
  public message: string;
  public premiumTooltip: string;
  public brandingTooltip: string;
  public fireStoreData: any;
  public contactData: any;
  public newContactForm = new FormGroup({
    email: new FormControl('', Validators.required),
    practiceName: new FormControl('', Validators.required)
  });
  public endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';

  constructor(private router: Router,
    public ngxSmartModalService: NgxSmartModalService,
    public db: AngularFireLiteDatabase,
    public auth: AngularFireLiteAuth,
    public fireStore: AngularFireLiteFirestore,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.message = 'Hello';
    this.premiumTooltip = 'Process payments, accept patient forms, build your patient database, schedule appointments, and more!';
    this.brandingTooltip = 'Custom designed business cards, health history forms, referral cards, appointment cards, and more!';
  }

  navigateToPage(route) {
    this.router.navigate([route]);
  }

  saveContactInformation() {
    var contactInfo = {
      email: this.newContactForm.get('email').value,
      practiceName: this.newContactForm.get('practiceName').value
    };

    this.fireStore.push('contacts', contactInfo).subscribe(
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

    const signUpInfo = {
      email: this.newContactForm.get('email').value,
      practiceName: this.newContactForm.get('practiceName').value
    }
    
    const data = {
      toEmail: 'ethan.durham3692@gmail.com',
      toName: 'Ethan Durham',
      leadEmailAddress: signUpInfo.email,
      leadPracticeName: signUpInfo.practiceName
    }

    this.httpClient.post(this.endpoint, data, {headers: apiHeaders}).subscribe();
  }
}
