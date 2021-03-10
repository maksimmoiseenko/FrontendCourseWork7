import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './Components/sign-in/sign-in.component';
import {LogInComponent} from './Components/log-in/log-in.component';
import {MainComponent} from './Components/main/main.component';
import {CoachEditComponent} from './Components/coach-edit/coach-edit.component';
import {DisciplineComponent} from './Components/discipline/discipline.component';
import {DisciplineEditComponent} from './Components/discipline-edit/discipline-edit.component';
import {OrganizationEditComponent} from './Components/organization-edit/organization-edit.component';
import {UsersComponent} from './Components/users/users.component';
import {CoachsComponent} from './Components/coachs/coachs.component';
import {OrganizationsComponent} from './Components/organizations/organizations.component';


const routes: Routes = [
  {path: 'signIn', component: SignInComponent},
  {path: 'signUp', component: LogInComponent},
  {path: '', component: MainComponent},
  {path: 'users', component: UsersComponent},
  {path: 'coachs', component: CoachsComponent},
  {path: 'organizations', component: OrganizationsComponent},
  {path: 'coach/edit', component: CoachEditComponent},
  {path: 'organization/edit', component: OrganizationEditComponent},
  {path: 'discipline/edit', component: DisciplineEditComponent},
  {path: 'disciplines', component: DisciplineComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'signIn'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
