import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { ProjectService } from 'src/app/services/project.service';
import { Task } from 'src/app/models/task';
import { Project } from 'src/app/models/projects';

@Component({
  selector: 'app-ver-projeto',
  templateUrl: './ver-projeto.component.html',
  styleUrls: ['./ver-projeto.component.css']
})
export class VerProjetoComponent implements OnInit {

  projectId!: number;
  percentage!: number;
  projects!: Project;
  isntLate!: Task;
  isLate!: Boolean;
  tasks: Task[] = [];

  constructor(private serviceTask: TaskService, 
        private serviceProject: ProjectService, 
        private router: Router, 
        private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.projectId = params['id']);
   }

  ngOnInit(): void {

    this.serviceProject.getById(this.projectId).subscribe((projects) => {
      this.projects = projects
      console.log(this.projects)
    });
    
    this.serviceProject.getPercentage(this.projectId).subscribe((percentage) => {
      this.percentage = percentage;
    })

    this.serviceProject.getIsLate(this.projectId).subscribe((task) => {
      if(task){
        this.isLate;
      }
    })

    this.serviceTask.listByProject(this.projectId).subscribe((tasks) => {
      this.tasks = tasks;
      for (let task of tasks) {
          console.log(task);
      }
    });
    
  }

  updateTask(task: Task): void {
    
    let taskUpdate: Task = {
      id: task.id,
      name: task.name,
      projectId: task.projectId,
      startDate: task.startDate,
      endDate: task.endDate,
      end: !task.end
    }

    this.serviceTask.uptadeTask(taskUpdate).subscribe(() => {
      this.serviceProject.getPercentage(this.projectId).subscribe((percentage) => {
        this.percentage = percentage;
      })  
    })

  }

}
