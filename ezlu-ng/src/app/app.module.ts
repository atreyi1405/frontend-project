import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { NavbarOneComponent } from './components/layouts/navbar-one/navbar-one.component';
import { NavbarTwoComponent } from './components/layouts/navbar-two/navbar-two.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { PortfolioTwoComponent } from './components/pages/portfolio-two/portfolio-two.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TeamTwoComponent } from './components/pages/team-two/team-two.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogTwoComponent } from './components/pages/blog-two/blog-two.component';
import { BlogThreeComponent } from './components/pages/blog-three/blog-three.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    FooterComponent,
    PreloaderComponent,
    HomeTwoComponent,
    NavbarOneComponent,
    NavbarTwoComponent,
    AboutComponent,
    ServiceComponent,
    ServiceDetailsComponent,
    PortfolioComponent,
    PortfolioTwoComponent,
    PricingComponent,
    ErrorComponent,
    FaqComponent,
    TeamComponent,
    TeamTwoComponent,
    PrivacyComponent,
    BlogComponent,
    BlogTwoComponent,
    BlogThreeComponent,
    BlogDetailsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
