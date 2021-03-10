import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignInService} from "../../Services/sign-in.service";
import {Router} from "@angular/router";
import {FormLogin} from "../../Models/FormLogin";



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formLogin: FormLogin = new FormLogin();
  account;

    constructor(private signInService: SignInService,
                private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
   this.signInService.send(this.formLogin).subscribe(data => {
     if (data != null) {
       this.router.navigate(['/']);
       console.log(data);
     }
     else { alert('неправильный логин или пароль'); }
   });
  }
}
