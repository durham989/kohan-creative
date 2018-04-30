import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireLiteAuth, AngularFireLiteDatabase, AngularFireLiteFirestore } from 'angularfire-lite';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'kohan-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.css']
})

export class GraphicDesignComponent implements OnInit {
  public message: string;
  public fireStoreData: any;
  public contactData: any;
  public newContactForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    practiceName: new FormControl(null, Validators.required)
  });
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
  }

  navigateToPage(route) {
    this.router.navigate([route]);
  }

  openContactUsModal() {
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
