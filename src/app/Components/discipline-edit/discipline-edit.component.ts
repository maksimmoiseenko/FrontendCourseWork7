import { Component, OnInit } from '@angular/core';
import {DisciplineService} from '../../Services/discipline.service';
import {Discipline} from '../../Models/Discipline';
import {Router} from '@angular/router';

@Component({
  selector: 'app-discipline-edit',
  templateUrl: './discipline-edit.component.html',
  styleUrls: ['./discipline-edit.component.css']
})
export class DisciplineEditComponent implements OnInit {
  discipline: any;
  constructor(private disciplineService: DisciplineService,
              private router: Router) { }

  ngOnInit(): void {
    this.disciplineService.findDiscipline(+localStorage.getItem('id')).subscribe((data) => {
      this.discipline = data;
    });
  }


  save() {
    this.discipline.id = +localStorage.getItem('id');
    this.disciplineService.editDiscipline(this.discipline);
    this.router.navigate(['/disciplines']);
  }
}
