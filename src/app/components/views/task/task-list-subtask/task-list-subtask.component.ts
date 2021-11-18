import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { SubtaskService } from 'src/app/services/subtask.service';
import { Subtask } from './../../../../models/subtask';

@Component({
  selector: 'app-task-list-subtask',
  templateUrl: './task-list-subtask.component.html',
  styleUrls: ['./task-list-subtask.component.css']
})
export class TaskListSubtaskComponent implements OnInit {

  subtasks: Subtask[] = [];
  id?: number;
  inscricao: any;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TaskService,
    private subtaskService: SubtaskService) { }

    ngOnInit() {
      this.inscricao = this.route.params.subscribe(
        (params: any) => {
          this.id = params['id'];
        }
      );
      this.subtaskService.listByTask(this.id).subscribe((subtasks) => {
        this.subtasks = subtasks;
        
    });
    }


}
