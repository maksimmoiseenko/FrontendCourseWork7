import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {OrganizationService} from '../../Services/organization.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {
  organizations: any;

  constructor(private router: Router,
              private organizationService: OrganizationService) { }

  ngOnInit(): void {
    this.organizationService.getOrganizations().subscribe(data => this.organizations = data);
  }

  deleteOrganization(id) {
    this.organizationService.deleteOrganization(id);
    this.router.navigate(['/organizations']);
  }

  editOrganization(id) {

  }
}
