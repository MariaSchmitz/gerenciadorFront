import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProjetosComponent } from './components/views/projeto/cadastrar-projetos/cadastrar-projetos.component';
import { TaskComponentComponent } from './components/views/task/task-component/task-component.component';
import { ListarUsuariosComponent } from './components/views/usuarios/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  {
    path: "",
    component: CadastrarProjetosComponent
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
    path: "user-list",
    component: ListarUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
