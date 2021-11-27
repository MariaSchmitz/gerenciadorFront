import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/projects';
import { Task } from 'src/app/models/task';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
import {MatDialog} from '@angular/material/dialog';

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
  end!: boolean;
  created = new Date();

  constructor(private router: Router,
    private service: TaskService,
    private serviceProject: ProjectService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.serviceProject.list().subscribe((projects) => {
      this.projects = projects;
    });
  }

  cadastrarTask() {
    let task: Task = {
      name: this.name,
      projectId: this.projectId,
      endDate: this.endDate,
      startDate: this.startDate,
      end: this.end,
      created: this.created,
    }
    
    this.service.createTask(task).subscribe((task) => {
      console.log(task)
      this.dialog.open(TaskComponentComponentDialog)
      this.router.navigate(["task-list"]);
    }, (error) => {
      this.dialog.open(TaskComponentComponentDialogError)
      console.log(error)
    })
  }
}

@Component({
  selector: 'app-task-component-dialog',
  templateUrl: './task-component.component-dialog.html'
})
export class TaskComponentComponentDialog {}

@Component({
  selector: 'app-task-component-dialog-error',
  templateUrl: './task-component.component-dialog-error.html'
})
export class TaskComponentComponentDialogError {
  
  
}
