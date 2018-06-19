import { Component, HostListener, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { WINDOW } from './services/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router,
    public pageMeta: Meta,
    public pageTitle: Title,
    @Inject(WINDOW) private window: Window) {
      pageTitle.setTitle('Kohan Creative: Dental Website Design & Development');
      pageMeta.addTags([
        { name: 'author', content: 'https://www.kasuriagroup.com/' },
        { name: 'keywords', content: 'dental website design, dental website development, dental branding, dental graphic design, dental social media, social media marketing, graphic design, website development, website design'},
        { name: 'description', content: 'Kohan Creative is a website design and development firm specializing in creating beautiful websites and branding for dental practices.'}
      ]);
    }

  ngOnInit() {
    // Scroll to top on route change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      // window.scrollTo(0, 0);
    });
  }

}
