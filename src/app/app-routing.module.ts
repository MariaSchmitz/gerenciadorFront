import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProjetosComponent } from './components/views/projeto/cadastrar-projetos/cadastrar-projetos.component';
import { ListarProjetosComponent } from './components/views/projeto/listar-projetos/listar-projetos.component';
import { ListarTasksComponent } from './components/views/task/listar-tasks/listar-tasks.component';
import { TaskComponentComponent } from './components/views/task/task-component/task-component.component';
import { CriarUsuarioComponent } from './components/views/usuarios/criar-usuario/criar-usuario.component';
import { ListarUsuariosComponent } from './components/views/usuarios/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  {
    path: "",
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
