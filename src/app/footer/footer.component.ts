import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kohan-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public message: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.message = 'Hello';
  }

  navigateHome() {
    this.router.navigate(['home']);
  }
}
