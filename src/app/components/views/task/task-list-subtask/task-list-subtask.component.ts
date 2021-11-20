import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {MatDialog} from '@angular/material/dialog';
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
  description?:string;
  end?:number;

  inscricao: any;
  curso: any;
  disabled = true;
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal') deleteModal:any;
  @ViewChild('updateModal') updateModal:any;

  subtaskSelecionada?: Subtask;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TaskService,
    private subtaskService: SubtaskService,
    public dialog: MatDialog,
    private modalService: BsModalService) { }

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
    deleteSubtask(subtask: Subtask) {
      this.subtaskSelecionada = subtask;
      console.log(subtask.id);
      this.deleteModalRef = this.modalService.show(this.deleteModal,{class: 'modal-sm'});
      
    }
    onConfirmDelete(){
      this.subtaskService.deleteSubtask(this.subtaskSelecionada?.id).subscribe((id) => {
        this.router.navigate(['/task-list-subtask',this.id]).then(()=> {window.location.reload()
        })
        this.deleteModalRef?.hide();
      }, (error) => {
        console.log(error);
      })
    }

    onDeclineDelete(){
      this.deleteModalRef?.hide();
    }
    
    updateSubtask(subtask: Subtask){
      
      this.subtaskSelecionada = subtask;
      console.log(this.subtaskSelecionada);
      this.deleteModalRef = this.modalService.show(this.updateModal,{class: 'modal-sm'});
      
    }
    onConfirmUpdate(){
      /*
      this.subtaskService.uptadeTask(this.subtaskSelecionada?).subscribe((this.subtaskSelecionada) => {
        this.router.navigate(['/task-list-subtask',this.id]).then(()=> {window.location.reload()
        })
        this.deleteModalRef?.hide();
      }, (error) => {
        console.log(error);
      })
      */
    }

    onDeclineUpdate(){
      this.deleteModalRef?.hide();
    }

}
