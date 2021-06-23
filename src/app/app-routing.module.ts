import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './blog/post/post.component';
import { ExpenseTrackerComponent } from './portfolio/dev/app-playground/expense-tracker/expense-tracker.component';
import { TodoComponent } from './portfolio/dev/app-playground/todo/todo.component';
import { GraphicDesignComponent } from './portfolio/design/graphic-design/graphic-design.component';
import { DevComponent } from './portfolio/dev/dev.component';
import { CancerslugComponent } from './portfolio/design/cancerslug/cancerslug.component';
import { CancerslugHomeComponent } from './portfolio/design/cancerslug/home/home.component';
import { CancerslugStoreComponent } from './portfolio/design/cancerslug/store/store.component';
import { CancerslugLandingComponent } from './portfolio/design/cancerslug/landing/landing.component';
import { CancerslugContactComponent } from './portfolio/design/cancerslug/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/dev', component: DevComponent, data: { animation: 'isLeft' } },
  { path: 'portfolio/dev/blog', component: BlogComponent },
  { path: 'portfolio/dev/blog/:id', component: PostComponent },
  { path: 'portfolio/dev/expense-tracker', component: ExpenseTrackerComponent },
  { path: 'portfolio/dev/todo', component: TodoComponent },
  { path: 'portfolio/design', component: GraphicDesignComponent, data: { animation: 'isRight' } },
  { path: 'portfolio/design/graphic-design', component: GraphicDesignComponent },
  { path: 'cancerslug', component: CancerslugComponent, children: [
    { path: 'landing', component: CancerslugLandingComponent },
    { path: 'home', component: CancerslugHomeComponent },
    { path: 'store', component: CancerslugStoreComponent },
    { path: 'contact', component: CancerslugContactComponent },
  ] },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
