import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireLiteAuth, AngularFireLiteDatabase, AngularFireLiteFirestore } from 'angularfire-lite';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { fadeInAnimation } from '../animations/fade-in.animation';

@Component({
  selector: 'kohan-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})

export class WebDevelopmentComponent implements OnInit {
  public message: string;
  public contactData: any;
  public newContactForm = new FormGroup({
    email: new FormControl('', Validators.required),
    practiceName: new FormControl('', Validators.required)
  });

  constructor(private router: Router, 
    public ngxSmartModalService: NgxSmartModalService,
    public db: AngularFireLiteDatabase,
    public auth: AngularFireLiteAuth,
    public fireStore: AngularFireLiteFirestore) {}

  ngOnInit() {
    this.message = 'Hello';
  }

  navigateToPage(route) {
    this.router.navigate([route]);
  }

  saveContactInformation() {
    var contactInfo = {
      email: this.newContactForm.get('email').value,
      practiceName: this.newContactForm.get('practiceName').value
    };
    
    this.fireStore.push('contacts',contactInfo).subscribe(
      data => {
        this.contactData = data;
        console.log(JSON.stringify(this.contactData));
      },
      error => {
        console.error(error);
      }
    );
  }
}
