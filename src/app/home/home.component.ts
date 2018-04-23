import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AngularFireLiteAuth, AngularFireLiteDatabase, AngularFireLiteFirestore } from 'angularfire-lite';

@Component({
  selector: 'kohan-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public message: string;
  public fireStoreData: any;
  public contactData: any;
  public newContactForm = new FormGroup({
    email: new FormControl('', Validators.required),
    practiceName: new FormControl('', Validators.required)
  });

  constructor(private router: Router,
    public ngxSmartModalService: NgxSmartModalService,
    public db: AngularFireLiteDatabase,
    public auth: AngularFireLiteAuth,
    public fireStore: AngularFireLiteFirestore) { }

  ngOnInit() {
    this.message = 'Hello';
    this.auth.signinAnonymously();
    // this.db.read('contacts').subscribe((data) => {
    //   this.contactData = data;
    // });
    this.fireStore.read('contacts').subscribe((data) => {
      this.fireStoreData = data;
      console.log(JSON.stringify(this.fireStoreData));
    });
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
        console.log(this.contactData);
      },
      error => {
        console.error(error);
      }
    );
  }
}
