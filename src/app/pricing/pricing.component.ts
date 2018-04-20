import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'kohan-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})

export class PricingComponent implements OnInit {
  public message: string;
  public premiumTooltip: string;
  public brandingTooltip: string;

  constructor(private router: Router, public ngxSmartModalService: NgxSmartModalService) {}

  ngOnInit() {
    this.message = 'Hello';
    this.premiumTooltip = 'Process payments, accept patient forms, build your patient database, schedule appointments, and more!';
    this.brandingTooltip = 'Custom designed business cards, health history forms, referral cards, appointment cards, and more!';
  }

  navigateToPage(route) {
    this.router.navigate([route]);
  }
}
