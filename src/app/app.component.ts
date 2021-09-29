import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: []
})
export class AppComponent implements OnInit{

  users: User[] = [];

  constructor(private service: UserService){}

  ngOnInit(): void {
     this.service.list().subscribe(users => {
         this.users = users;
     });
  }
  
}
