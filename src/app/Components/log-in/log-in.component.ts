import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../Services/account.service';
import {Account} from '../../Models/Account';
import {Organization} from '../../Models/Organization';
import {Coach} from '../../Models/Coach';
import {SimpleUser} from "../../Models/SimpleUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  account1: Account = new Account();
  account2: Account = new Account();
  account3: Account = new Account();

  organization: Organization = new Organization();
  coach: Coach = new Coach();
  user: SimpleUser = new SimpleUser();
  constructor(private accountService: AccountService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logInOrganization() {
    this.account1.organization = this.organization;
    console.log(this.account1);
    this.accountService.send(this.account1).subscribe(data => {
      console.log(data);
      this.router.navigate(['/signIn']);
    });
  }

  logInCoach() {
    this.account2.coach = this.coach;
    console.log(this.account2);
    this.accountService.send(this.account2).subscribe(data => {
      console.log(data);
      this.router.navigate(['/signIn']);
    });
  }

  logInUser() {
    this.account3.user = this.user;
    console.log(this.account3);
    this.accountService.send(this.account3).subscribe(data => {
      console.log(data);
      this.router.navigate(['/signIn']);
    });
  }
}
