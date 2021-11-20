import { Subtask } from './../../../../models/subtask';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { SubtaskService } from 'src/app/services/subtask.service';

@Component({
  selector: 'app-listar-tasks',
  templateUrl: './listar-tasks.component.html',
  styleUrls: ['./listar-tasks.component.css']
})
export class ListarTasksComponent implements OnInit {

  tasks: Task[] = [];
  subtasks: Subtask[] = [];
  taskId?: number;
  id?: number;

  
  
  constructor(private router: Router,private service: TaskService,private subtaskService: SubtaskService) { 
    
  }
  

  ngOnInit(): void {
    
    this.service.list().subscribe((tasks) => {
      this.tasks = tasks;
      
      for (let task of tasks) {
        console.log("Entrei na Task");
        console.log(task);
        console.log(task.id);
        this.taskId = task.id;

        console.log("Chegando na Subtask");
        console.log(this.taskId);
          /** 
        this.subtaskService.listByTask(this.taskId).subscribe((subtasks) => {
          console.log("Entrei na Subtask Service");
          this.subtasks = subtasks;
          
          for(let subtask of subtasks){
            console.log("Entrei na Subtask");
            console.log(subtask);
          }
        });
        */
      }
  });

  
  }

}
