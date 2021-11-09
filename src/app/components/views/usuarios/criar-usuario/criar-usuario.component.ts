import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent implements OnInit {

  name!: string;
  office!: string;
  company!: string;
  created = new Date();

  constructor(private router: Router,
    private service: UserService) { }

  ngOnInit(): void {

  }

  cadastrarUsuario(): void {
    let user: User = {
      name: this.name,
      office: this.office,
      company: this.company
    }

    this.service.createUser(user).subscribe((project) => {
      console.log(user);
      this.router.navigate(["user-list"]);
    }, (error) => {

    })
  }
}
