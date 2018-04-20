import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kohan-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.css']
})

export class GraphicDesignComponent implements OnInit {
  public message: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.message = 'Hello';
  }

  navigateToPage(route) {
    this.router.navigate([route]);
  }
}
