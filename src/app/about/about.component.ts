import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireLiteAuth, AngularFireLiteDatabase, AngularFireLiteFirestore } from 'angularfire-lite';
import { ScrollService } from '../services/scroll.service';
import { WINDOW } from '../services/window.service';

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

  // particles variables
  myStyle: Object = {};
  myParams: Object = {};
  width: number = 100;
  height: number = 100;

  constructor(private router: Router,
    public ngxSmartModalService: NgxSmartModalService,
    public db: AngularFireLiteDatabase,
    public auth: AngularFireLiteAuth,
    public fireStore: AngularFireLiteFirestore,
    private httpClient: HttpClient,
    private scrollService: ScrollService,
    @Inject(WINDOW) public window: Window) { }

  ngOnInit() {
    this.message = 'Hello';
    this.auth.signinAnonymously();
    this.fireStore.read('contacts').subscribe((data) => {
      this.fireStoreData = data;
    });
    console.log(window);
    this.configureParticles();
  }

  navigateToPage(route) {
    this.router.navigate([route]);
  }

  openWorkWithUsModal() {
    window.scrollTo(0, 0);
    this.ngxSmartModalService.getModal('myModal').open();
  }

  scrollToPageSection(target) {
    // this.scrollService.triggerScrollTo(target);
    this.scrollService.triggerScrollToWithSpeed(target);
  }

  configureParticles() {
    this.myStyle = {
      'position': "absolute",
      "width": '100%',
      'height': "100vh",
      // "z-index": -10,
      // "top": 0,
      // "left": 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#20bad2'
        },
        shape: {
          type: 'circle',
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#0574ac",
          opacity: 0.4,
          width: 1
        },
      }
    };
  }
  
}
