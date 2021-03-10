import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  deleteUser(id) {
    this.userService.deleteUser(id);
    this.router.navigate(['/users']);
  }

  editUser(id) {

  }
}
