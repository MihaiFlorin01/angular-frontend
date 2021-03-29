import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WebsiteListComponent} from './components/websites/list/website-list.component';
import {CreateWebsiteComponent} from './components/websites/create/create-website.component';
import {UpdateWebsiteComponent} from './components/websites/update/update-website.component';
import {WebsiteDetailsComponent} from './components/websites/details/website-details.component';
import {LoginComponent} from './components/websites/login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'websites', component: WebsiteListComponent},
  {path: 'create-website', component: CreateWebsiteComponent},
  {path: '', redirectTo: 'websites', pathMatch: 'full' },
  {path: 'update/:id', component: UpdateWebsiteComponent},
  {path: 'details/:id', component: WebsiteDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
