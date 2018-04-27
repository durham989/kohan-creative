import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'kohan-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public message: string;

  constructor(private router: Router, 
    private ngxSmartModalService: NgxSmartModalService) {}

  ngOnInit() {
    this.message = 'Hello';
  }

  navigateHome() {
    this.router.navigate(['home']);
  }

  openWorkWithUsModal() {
    window.scrollTo(0, 0);
    this.ngxSmartModalService.getModal('myModal').open();
  }
}
