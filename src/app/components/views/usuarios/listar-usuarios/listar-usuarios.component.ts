import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-listar-usuarios",
  templateUrl: "./listar-usuarios.component.html",
  styleUrls: ["./listar-usuarios.component.css"],
})
export class ListarUsuariosComponent implements OnInit {
  users: User[] = [];
  colunasExibidas: String[] = [
    "id",
    "name",
    "office",
    "company",
    "created",
    "actions",
  ];
  constructor(private service: UserService, private router: Router) {}

  ngOnInit(): void {
    this.service.list().subscribe((users) => {
      this.users = users;
    });
  }

  editar = (id: number) => {
    this.router.navigate([`editar-usuario/${id}`]);
  };
}
