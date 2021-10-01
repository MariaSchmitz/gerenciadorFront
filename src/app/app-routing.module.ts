import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProjetosComponent } from './components/views/projeto/cadastrar-projetos/cadastrar-projetos.component';
import { ListarUsuariosComponent } from './components/views/usuarios/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  {
    path: "project-create",
    component: CadastrarProjetosComponent
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
