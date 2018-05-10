import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharingService {

  private emailAddressSource = new BehaviorSubject<any>('');
  currentEmailAddress = this.emailAddressSource.asObservable();

  private practiceNameSource = new BehaviorSubject<any>('');
  currentPracticeName = this.practiceNameSource.asObservable();

  private screenHeightSource = new BehaviorSubject<any>('');
  currentScreenHeight = this.screenHeightSource.asObservable();

  constructor() {}

  changeEmailAddress(emailAddress) {
    this.emailAddressSource.next(emailAddress);
  }

  changePracticeName(practiceName) {
    this.practiceNameSource.next(practiceName);
  }

  changeScreenHeight(screenHeight) {
    this.screenHeightSource.next(screenHeight);
  }
}