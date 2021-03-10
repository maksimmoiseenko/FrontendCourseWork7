import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './Components/main/main.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { CoachEditComponent } from './Components/coach-edit/coach-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { DisciplineComponent } from './Components/discipline/discipline.component';
import { DisciplineEditComponent } from './Components/discipline-edit/discipline-edit.component';
import { OrganizationsComponent } from './Components/organizations/organizations.component';
import { UsersComponent } from './Components/users/users.component';
import { CoachsComponent } from './Components/coachs/coachs.component';
import { OrganizationEditComponent } from './Components/organization-edit/organization-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    LogInComponent,
    CoachEditComponent,
    DisciplineComponent,
    DisciplineEditComponent,
    OrganizationsComponent,
    UsersComponent,
    CoachsComponent,
    OrganizationEditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
