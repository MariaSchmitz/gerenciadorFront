import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { MatDialog } from "@angular/material/dialog";
import { TaskService } from "src/app/services/task.service";
import { SubtaskService } from "src/app/services/subtask.service";
import { Subtask } from "./../../../../models/subtask";
import { MatCheckbox } from "@angular/material/checkbox";

@Component({
  selector: "app-task-list-subtask",
  templateUrl: "./task-list-subtask.component.html",
  styleUrls: ["./task-list-subtask.component.css"],
})
export class TaskListSubtaskComponent implements OnInit {
  subtasks: Subtask[] = [];

  subtasksUpdate: Subtask[] = [];

  id?: number;
  description!: string;
  taskId!: number;
  end!: boolean;

  inscricao: any;
  curso: any;
  disabled = true;
  deleteModalRef?: BsModalRef;

  descriptionUpdate?: string;

  @ViewChild("deleteModal") deleteModal: any;
  //@ViewChild("updateModal") updateModal: any;
  @ViewChild("updateModal") updateModal: any;
  @ViewChild("myDescription") myDescription: any;
  @ViewChild("myEnd") myEnd: any;
  @ViewChild("myEndDialog") myEndDialog: any;

  subtaskSelecionada?: Subtask;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceTask: TaskService,
    private subtaskService: SubtaskService,
    public dialog: MatDialog,
    private modalService: BsModalService
  ) {
    console.log("TaskListSubtaskComponent");
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params["id"];
    });

    this.subtaskService.listByTask(this.id).subscribe((subtasks) => {
      this.subtasks = subtasks;
    });

  }

  deleteSubtask(subtask: Subtask) {
    this.subtaskSelecionada = subtask;
    console.log(subtask.id);
    this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: "modal-sm",
    });
  }
  onConfirmDelete() {
    this.subtaskService.deleteSubtask(this.subtaskSelecionada?.id).subscribe(
      (id) => {
        this.router.navigate(["/task-list-subtask", this.id]).then(() => {
          window.location.reload();
        });
        this.deleteModalRef?.hide();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef?.hide();
  }

  updateSubtask(subtask: Subtask): void {
    console.log("Essa foi a subtask");
    console.log(subtask);
    console.log(this.myEnd);
    

    let subtaskUpdate: Subtask = {
      id: subtask.id,
      description: subtask.description,
      taskId: subtask.taskId,
      end: !subtask.end,
    };
    
    this.subtaskService.uptadeSubTask(subtaskUpdate).subscribe((subtask) => {
      console.log(subtask)
      console.log("atualizou")
    })
  }


  onConfirmUpdate(subtaskUpdate: Subtask): void {
    console.log("Essa foi a subtask DIALOG");
    //const firstChild = parentElement.children[0];
    //const firstImage = parentElement.querySelector("img");
    console.log(subtaskUpdate);

    console.log(this.updateModal.nativeElement.value);
    /*
    this.subtaskService.uptadeTask(subtaskUpdate).subscribe(
      (subtaskUpdate) => {
        
        this.router.navigate(["/task-list-subtask", this.id]).then(() => {
          window.location.reload();
        });
        
        this.deleteModalRef?.hide();
      },
      (error) => {
        console.log(error);
      }
    );
    */
    this.subtasksUpdate.shift();
  }
  
  onDeclineUpdate() {
    this.deleteModalRef?.hide();
    this.subtasksUpdate.shift();
  }
  
}
