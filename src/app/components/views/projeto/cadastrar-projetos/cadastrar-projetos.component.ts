import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Project } from 'src/app/models/projects';
import { User } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastrar-projetos',
  templateUrl: './cadastrar-projetos.component.html',
  styleUrls: ['./cadastrar-projetos.component.css']
})
export class CadastrarProjetosComponent implements OnInit {

  name!: string;
  selected_user!: User;
  users!: User[];
  userId!: number;
  company!: string;
  created = new Date();
  startDate!: Date;
  endDate!: Date;

  constructor(private router: Router,
    private service: ProjectService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.list().subscribe((users) => {
      this.users = users;
      console.table(users);
  });
  }

  cadastrar(): void{
    this.userService.getById(this.userId).subscribe((user) => {

      let projeto : Project = {
        name: this.name,
        user: user,
        userId: this.userId,
        company: user.company,
        created: this.created,
        startDate: this.startDate,
        endDate: this.endDate
      }

      console.log(projeto)

      this.service.create(projeto).subscribe((project) => {
        console.log(projeto);
        this.router.navigate(["project-list"]);
      }, (error) => {
        console.log(error)
      })
    })

  
    
  }
}
