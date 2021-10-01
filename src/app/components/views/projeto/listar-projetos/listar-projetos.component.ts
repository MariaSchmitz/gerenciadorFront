import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projects';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-listar-projetos',
  templateUrl: './listar-projetos.component.html',
  styleUrls: ['./listar-projetos.component.css']
})
export class ListarProjetosComponent implements OnInit {

  produtos: Project[] = [];

    constructor(private service: ProjectService) {}

    ngOnInit(): void {
        this.service.list().subscribe((projects) => {
            projects = projects;
            for (let project of projects) {
                console.log(project);
            }
        });
    }
}
