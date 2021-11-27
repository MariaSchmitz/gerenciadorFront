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
  selector: 'app-edit-subtask',
  templateUrl: './edit-subtask.component.html',
  styleUrls: ['./edit-subtask.component.css']
})
export class EditSubtaskComponent implements OnInit {

  subtasks: Subtask[] = [];

  inscricao: any;

  id?: number;
  description!: string;
  taskId!: number;
  end!: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: TaskService,
    private subtaskService: SubtaskService,
    public dialog: MatDialog,
    private modalService: BsModalService) { }

  ngOnInit() {
    console.log("Edit Subtask");
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params["id"];
      console.log(this.id);
    });

    this.subtaskService.listBySubtask(this.id).subscribe((subtasks) => {
      this.subtasks = subtasks;
    });
  }

  salvar(){
    console.log("Salvando");
  }
}
