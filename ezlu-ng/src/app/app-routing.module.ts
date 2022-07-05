import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogTwoComponent } from './components/pages/blog-two/blog-two.component';
import { BlogThreeComponent } from './components/pages/blog-three/blog-three.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { TeamTwoComponent } from './components/pages/team-two/team-two.component';
import { TeamComponent } from './components/pages/team/team.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { PortfolioTwoComponent } from './components/pages/portfolio-two/portfolio-two.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { TermsComponent } from './components/pages/terms/terms.component';

const routes: Routes = [
  {path: '', component: HomeOneComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'about', component: AboutComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'service-details', component: ServiceDetailsComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'portfolio-two', component: PortfolioTwoComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'team', component: TeamComponent},
    {path: 'team-two', component: TeamTwoComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-two', component: BlogTwoComponent},
    {path: 'blog-three', component: BlogThreeComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'coming-soon', component:ComingSoonComponent},
    {path: 'terms', component:TermsComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}