import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/projects';
import { Task } from 'src/app/models/task';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {
  
  projects: Project[] = [];

  name!: string;
  user!: "Maria";
  company!: "Tenda";
  created = new Date();
  startDate!: Date;
  endDate!: Date;
  projectId!: number;

  constructor(private router: Router,
    private service: TaskService,
    private serviceProject: ProjectService) { }

  ngOnInit(): void {
    this.serviceProject.list().subscribe((projects) => {
      this.projects = projects;
      for (let project of projects) {
          console.log(project);
      }
  });
  }

  // cadastrar(): void{
    
  //   let task: Task = {
  //     name: this.name,
  //     user: "adasdasd",
  //     projectId: this.projectId,
  //     company: "asdasdas",
  //     startDate: this.startDate,
  //     endDate: this.endDate
  //   }

  //   this.service.create(task).subscribe((task) => {
  //     console.log(task);
  //   }, (error) => {

  //   })
  //   }
}
