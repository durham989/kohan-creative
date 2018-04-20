import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'kohan-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})

export class WebDevelopmentComponent implements OnInit {
  public message: string;

  constructor(private router: Router, public ngxSmartModalService: NgxSmartModalService) {}

  ngOnInit() {
    this.message = 'Hello';
  }

  navigateToPage(route) {
    this.router.navigate([route]);
  }
}
