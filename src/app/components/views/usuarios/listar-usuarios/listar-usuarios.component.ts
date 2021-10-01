import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  users: User[] = [];

  constructor(private service: UserService){}

  ngOnInit(): void {
    this.service.list().subscribe(users => {
      this.users = users;
  });
  }

}
