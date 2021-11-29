import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { Subtask } from 'src/app/models/subtask';
import { SubtaskService } from 'src/app/services/subtask.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-subtask',
  templateUrl: './create-subtask.component.html',
  styleUrls: ['./create-subtask.component.css']
})
export class CreateSubtaskComponent implements OnInit {

  
  description!: string;
  task!: Task;
  taskID!: number;

  constructor(
    private serviceTask: TaskService,
    private subtaskService: SubtaskService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.serviceTask.getById(params["id"]).subscribe((task) => {
        this.task = task
        this.taskID = params["id"]
      });
    });
  }

  cadastrar(): void {
    console.log(this.description);
    let subtask: Subtask = {
      description: this.description,
      taskId: this.taskID,
      end: false
    }
    console.log(subtask);
    this.subtaskService.createSubTask(subtask).subscribe((subtask) => {
      console.log(subtask)
      this.router.navigate([`task-list-subtask/${this.taskID}`]);
    })
  }
}
