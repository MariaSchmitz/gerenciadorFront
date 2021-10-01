import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Project } from 'src/app/models/projects';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-cadastrar-projetos',
  templateUrl: './cadastrar-projetos.component.html',
  styleUrls: ['./cadastrar-projetos.component.css']
})
export class CadastrarProjetosComponent implements OnInit {

  name!: string;
  user!: "Maria";
  company!: "Tenda";
  created = new Date();
  startDate!: Date;
  endDate!: Date;

  constructor(private router: Router,
    private service: ProjectService) { }

  ngOnInit(): void {
  }

  cadastrar(): void{
    let projeto : Project = {
      name: this.name,
      user: "",
      company: "",
      created: this.created,
      endDate: this.endDate,
      startDate: this.startDate
    }

    this.service.create(projeto).subscribe((project) => {
      console.log(projeto);
    }, (error) => {

    })
  }
}
