import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';

import { NavbarOneComponent } from './components/layouts/navbar-one/navbar-one.component';
import { NavbarTwoComponent } from './components/layouts/navbar-two/navbar-two.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';

import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';

import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogTwoComponent } from './components/pages/blog-two/blog-two.component';
import { BlogThreeComponent } from './components/pages/blog-three/blog-three.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { TermsComponent } from './components/pages/terms/terms.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    FooterComponent,
    PreloaderComponent,
  
    NavbarOneComponent,
    NavbarTwoComponent,
    AboutComponent,
    ServiceComponent,
    ServiceDetailsComponent,
   
    PricingComponent,
    ErrorComponent,
    FaqComponent,
    
    PrivacyComponent,
    BlogComponent,
    BlogTwoComponent,
    BlogThreeComponent,
    BlogDetailsComponent,
    ContactComponent,
    ComingSoonComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
