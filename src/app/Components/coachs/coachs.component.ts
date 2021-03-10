import { Component, OnInit } from '@angular/core';
import {CoachService} from "../../Services/coach.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-coachs',
  templateUrl: './coachs.component.html',
  styleUrls: ['./coachs.component.css']
})
export class CoachsComponent implements OnInit {
  coachs;
  constructor(private coachService: CoachService,
              private router: Router) { }

  ngOnInit(): void {
    this.coachService.getCoachs().subscribe(data => this.coachs = data);
  }

  deleteCoach(id) {
    this.coachService.deleteCoach(id);
  }

  editCoach(id) {
    // this.router.navigate(['/coach/edit']);
  }
}
