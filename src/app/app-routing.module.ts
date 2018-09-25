import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from "./post/post.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {cover: '', heading: 'Clean Blog', subheading: 'A Blog Theme by Start Bootstrap'}},
  {path: 'contact', component: ContactComponent, data: {cover: '', heading: '', subheading: ''}},
  {path: 'about', component: AboutComponent, data: {cover: '', heading: '', subheading: ''}},
  {path: 'post', component: PostComponent, data: {cover: '', heading: '', subheading: ''}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
