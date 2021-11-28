import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-editar-usuario",
  templateUrl: "./editar-usuario.component.html",
  styleUrls: ["./editar-usuario.component.css"],
})
export class EditarUsuarioComponent implements OnInit {
  user!: User;
  userid!: number;

  name!: string;
  office!: string;
  company!: string;

  constructor(
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => (this.userid = params["id"]));
  }

  ngOnInit(): void {
    this.service.getById(this.userid).subscribe((users) => {
      this.name = users.name;
      this.office = users.office;
      this.company = users.company;
    });
  }

  editarUsuario(): void {
    let user: User = {
      id: this.userid,
      name: this.name,
      office: this.office,
      company: this.company,
    };

    this.service.updateUser(user).subscribe((users) => {
      this.router.navigate(["user-list"]);
    });
  }
}
