import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kohan-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})

export class WebDevelopmentComponent implements OnInit {
  public message: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.message = 'Hello';
  }

  navigateToPage(route) {
    this.router.navigate([route]);
  }
}
