import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-listar-tasks',
  templateUrl: './listar-tasks.component.html',
  styleUrls: ['./listar-tasks.component.css']
})
export class ListarTasksComponent implements OnInit {

  tasks: Task[] = [];
  isChecked = true;
  
  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.service.list().subscribe((tasks) => {
      this.tasks = tasks;
      for (let task of tasks) {
          console.log(task);
      }
  });
  }

}
