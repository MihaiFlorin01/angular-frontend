import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CreateWebsiteComponent, DialogCreateWebsite} from './components/websites/create/create-website.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WebsiteDetailsComponent } from './components/websites/details/website-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {DialogDeleteWebsite} from './components/websites/delete/DialogDeleteWebsite';
import {
  DialogUpdateWebsite,
  UpdateWebsiteComponent
} from './components/websites/update/update-website.component';
import {WebsiteListComponent} from './components/websites/list/website-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatOptionModule} from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {CommonModule} from '@angular/common';
import { LoginComponent } from './components/websites/login/components/login.component';
import { RegisterComponent } from './components/websites/register/components/register.component';
import { ActionComponent } from './components/websites/action/components/action.component';
import {AuthGuard} from './components/websites/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DialogCreateWebsite,
    DialogDeleteWebsite,
    CreateWebsiteComponent,
    UpdateWebsiteComponent,
    WebsiteDetailsComponent,
    WebsiteListComponent,
    LoginComponent,
    RegisterComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatRadioModule,
    MatOptionModule,
    CommonModule
  ],
  entryComponents: [CreateWebsiteComponent, DialogCreateWebsite, DialogUpdateWebsite, DialogDeleteWebsite],
  providers: [AuthGuard, {
    provide: MatDialogRef,
    useValue: DialogDeleteWebsite
  },
    DialogDeleteWebsite],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
