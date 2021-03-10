import { Component, OnInit } from '@angular/core';
import {Discipline} from "../../Models/Discipline";
import {DisciplineService} from "../../Services/discipline.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.css']
})
export class DisciplineComponent implements OnInit {
  discipline: Discipline = new Discipline();
  constructor(private disciplineService: DisciplineService,
              private router: Router) { }
  disciplines: Discipline[];
  ngOnInit(): void {
    this.disciplineService.disciplines().subscribe((data) => this.disciplines = data);
  }

  addDiscipline() {
    this.disciplineService.send(this.discipline).subscribe();
  }

  onDelete(id: number) {
    this.disciplineService.deleteDiscipline(id);
  }

  onEdit(id: number) {
    localStorage.setItem('id', String(id));
    this.router.navigate(['/discipline/edit']);
  }
}
