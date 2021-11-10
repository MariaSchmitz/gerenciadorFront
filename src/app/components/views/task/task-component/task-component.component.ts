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
  projectId!: number;
  startDate!: Date;
  endDate!: Date;
  created = new Date();

  constructor(private router: Router,
    private service: TaskService,
    private serviceProject: ProjectService) { }

  ngOnInit(): void {
    this.serviceProject.list().subscribe((projects) => {
      this.projects = projects;
    });
  }

  cadastrarTask(): void {
    let task: Task = {
      name: this.name,
      projectId: this.projectId,
      endDate: this.endDate,
      startDate: this.startDate,
      created: this.created,
    }

    this.service.createTask(task).subscribe((task) => {
      console.log(task)
      this.router.navigate(["task-list"]);
    }, (error) => {
      console.log(error)
    })
  }
}
