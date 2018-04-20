import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FooterComponent } from './footer/footer.component';

import { TransferHttpCacheModule } from '@nguniversal/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    WebDevelopmentComponent,
    GraphicDesignComponent,
    SocialMediaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    NgxSmartModalModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'web-design-development', component: WebDevelopmentComponent },
      { path: 'graphic-design-branding', component: GraphicDesignComponent },
      { path: 'social-media-marketing', component: SocialMediaComponent },
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ]),
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
