import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../Services/organization.service';
import {CoachService} from '../../Services/coach.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  organizations;
  coachs;
  constructor(private organizationService: OrganizationService,
              private coachService: CoachService) { }

  ngOnInit(): void {
    this.organizationService.get3Organization().subscribe(data => this.organizations = data);
    this.coachService.get3coach().subscribe(data => {this.coachs = data;});
  }

  onDeleteOrganization(id: any) {

  }

  onEditOrganization(id: any) {

  }

  onDeleteCoach(id: any) {

  }

  onEditCoach(id: any) {

  }
}
