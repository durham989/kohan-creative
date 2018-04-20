import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  AnimationEvent
} from '@angular/animations';

import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'kohan-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({transform: 'translateX(0)'})),
  //     transition('void => *', [
  //       animate(300, keyframes([
  //         style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
  //         style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
  //         style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
  //       ]))
  //     ]),
  //     transition('* => void', [
  //       animate(300, keyframes([
  //         style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
  //         style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
  //         style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
  //       ]))
  //     ])
  //   ])
  // ]
})

export class HomeComponent implements OnInit {
  public message: string;

  // animationStarted(event: AnimationEvent) {
  //   console.warn('Animation started: ', event);
  // }

  // animationDone(event: AnimationEvent) {
  //   console.warn('Animation done: ', event);
  // }

  constructor(private router: Router, public ngxSmartModalService: NgxSmartModalService) {}

  ngOnInit() {
    this.message = 'Hello';
  }

  navigateToPage(route) {
    this.router.navigate([route]);
  }
}
