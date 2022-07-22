import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';

import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogTwoComponent } from './components/pages/blog-two/blog-two.component';
import { BlogThreeComponent } from './components/pages/blog-three/blog-three.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';

import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';

import { ServiceComponent } from './components/pages/service/service.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { TermsComponent } from './components/pages/terms/terms.component';

const routes: Routes = [
  {path: '', component: HomeOneComponent},
    
    {path: 'about', component: AboutComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'service-details', component: ServiceDetailsComponent},
    

    {path: 'pricing', component: PricingComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'faq', component: FaqComponent},
    
    {path: 'privacy', component: PrivacyComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-two', component: BlogTwoComponent},
    {path: 'blog-three', component: BlogThreeComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'coming-soon', component:ComingSoonComponent},
    {path: 'terms', component:TermsComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}