import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =

  trigger('fadeInAnimation', [

    // route 'enter' transition
    transition(':enter', [
      style({ opacity: 0 }),
      animate('.5s', style({ opacity: 1 }))
    ]),
  ]);