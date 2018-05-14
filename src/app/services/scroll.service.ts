import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable()
export class ScrollService {
  constructor(private scrollToService: ScrollToService) {}

  public triggerScrollTo(target) {
    const config: ScrollToConfigOptions = {
      target: target
    };
    this.scrollToService.scrollTo(config);
  }

  public triggerScrollToWithSpeed(target) {
    const config: ScrollToConfigOptions = {
      target: target,
      duration: 250
    };
    this.scrollToService.scrollTo(config);
  }

}