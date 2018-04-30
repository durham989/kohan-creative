import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireLiteAuth, AngularFireLiteDatabase, AngularFireLiteFirestore } from 'angularfire-lite';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScrollService } from '../services/scroll.service';

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
  public contactUsModalOpen: Boolean;
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
    this.premiumTooltip = 'Process payments, accept patient forms, build your patient database, schedule appointments, and more!';
    this.brandingTooltip = 'Custom designed business cards, health history forms, referral cards, appointment cards, and more!';
  }

  navigateToPage(route) {
    this.router.navigate([route]);
  }

  openContactUsModal() {
    this.contactUsModalOpen = true;
    window.scrollTo(0, 0);
    this.ngxSmartModalService.getModal('contactUsModal').open();
  }

  openWorkWithUsModal() {
    window.scrollTo(0, 0);
    this.ngxSmartModalService.getModal('myModal').open();
  }

  scrollToPageSection(target) {
    this.scrollService.triggerScrollTo(target);
  }
}
