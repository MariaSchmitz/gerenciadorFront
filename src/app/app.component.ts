import { Component, OnInit } from "@angular/core";
import { User } from "./models/user";
import { UserService } from "./services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {

  users: User[] = [];
  name!: string;
  office!: string;
  company!: string;

  constructor(private user: UserService, private router: Router){}

  ngOnInit(): void {}

  cadastrar(): void {
    let user: User = {
      name: this.name,
      office: this.office,
      company: this.company,
    };

    this.user.createUser(user).subscribe((user) => {
      this.router.navigate(["user-list"]);
    });
  }
}
