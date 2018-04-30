import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireLiteAuth, AngularFireLiteDatabase, AngularFireLiteFirestore } from 'angularfire-lite';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'kohan-about-us',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutUsComponent implements OnInit {
  public message: string;
  public fireStoreData: any;
  public contactData: any;
  public endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';

  constructor(private router: Router,
    public ngxSmartModalService: NgxSmartModalService,
    public db: AngularFireLiteDatabase,
    public auth: AngularFireLiteAuth,
    public fireStore: AngularFireLiteFirestore,
    private httpClient: HttpClient,
    private scrollService: ScrollService) { }

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

  openWorkWithUsModal() {
    window.scrollTo(0, 0);
    this.ngxSmartModalService.getModal('myModal').open();
  }

  scrollToPageSection(target) {
    this.scrollService.triggerScrollTo(target);
  }
}
