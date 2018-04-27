import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { AngularFireLite } from 'angularfire-lite';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactUsComponent } from './contact/contact.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';

import { ContactService } from './services/contact.service';
import { SharingService } from './services/sharing.service';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { Http } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    WebDevelopmentComponent,
    GraphicDesignComponent,
    SocialMediaComponent,
    FooterComponent,
    PricingComponent,
    ContactUsComponent,
    WorkWithUsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AngularFireLite.forRoot(environment.config),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgxSmartModalModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'web-design-development', component: WebDevelopmentComponent },
      { path: 'graphic-design-branding', component: GraphicDesignComponent },
      { path: 'social-media-marketing', component: SocialMediaComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ]),
    TransferHttpCacheModule,
  ],
  providers: [
    ContactService,
    SharingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
