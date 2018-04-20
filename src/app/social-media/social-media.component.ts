import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kohan-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})

export class SocialMediaComponent implements OnInit {
  public message: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.message = 'Hello';
  }

  navigateToPage(route) {
    this.router.navigate([route]);
  }
}
