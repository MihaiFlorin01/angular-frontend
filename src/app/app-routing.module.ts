import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WebsiteListComponent} from './components/websites/list/website-list.component';
import {CreateWebsiteComponent} from './components/websites/create/create-website.component';
import {UpdateWebsiteComponent} from './components/websites/update/update-website.component';
import {WebsiteDetailsComponent} from './components/websites/details/website-details.component';
import {LoginComponent} from './components/websites/login/components/login.component';
import {AuthService} from './components/websites/login/auth-service/auth.service';
import {AuthGuard} from './components/websites/login/auth-guard/auth.guard';
import {RegisterComponent} from "./components/websites/register/components/register.component";
import {ActionComponent} from "./components/websites/action/components/action.component";

const routes: Routes = [
  {path: 'websites', component: WebsiteListComponent},
  // canActivate: [AuthGuard]
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'action', component: ActionComponent},
  {path: 'create-website', component: CreateWebsiteComponent},
  {path: '', redirectTo: 'websites', pathMatch: 'full' },
  {path: 'update/:id', component: UpdateWebsiteComponent},
  {path: 'details/:id', component: WebsiteDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
