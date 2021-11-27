import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProjetosComponent } from './components/views/projeto/cadastrar-projetos/cadastrar-projetos.component';
import { ListarProjetosComponent } from './components/views/projeto/listar-projetos/listar-projetos.component';
import { ListarTasksComponent } from './components/views/task/listar-tasks/listar-tasks.component';
import { TaskComponentComponent } from './components/views/task/task-component/task-component.component';
import { CriarUsuarioComponent } from './components/views/usuarios/criar-usuario/criar-usuario.component';
import { HomeComponent } from './components/views/home/home/home.component';
import { ListarUsuariosComponent } from './components/views/usuarios/listar-usuarios/listar-usuarios.component';
import { TaskListSubtaskComponent } from './components/views/task/task-list-subtask/task-list-subtask.component';
import { EditSubtaskComponent } from './components/views/task/edit-subtask/edit-subtask.component';
import { VerProjetoComponent } from './components/views/projeto/ver-projeto/ver-projeto.component';
import { CreateSubtaskComponent } from './components/views/task/create-subtask/create-subtask.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "user-create",
    component: CriarUsuarioComponent
  },
  {
    path: "project-create",
    component: CadastrarProjetosComponent
  },
  {
    path: "task-create",
    component: TaskComponentComponent
  },
  {
    path: "task-list",
    component: ListarTasksComponent
  },
  {
    path: "user-list",
    component: ListarUsuariosComponent
  },
  {
    path: "project-list",
    component: ListarProjetosComponent
  },
  {
    path: "project/:id",
    component: VerProjetoComponent
  },
  {
    path: "create-subtask/:id",
    component: CreateSubtaskComponent
  },
  {
    path: "task-list-subtask/:id",
    component: TaskListSubtaskComponent
  },
  {
    path: "edit-subtask/:id",
    component: EditSubtaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
