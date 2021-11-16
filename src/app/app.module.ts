import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

// componentes da aplicação
import { CadastrarProjetosComponent } from './components/views/projeto/cadastrar-projetos/cadastrar-projetos.component';
import { ListarUsuariosComponent } from './components/views/usuarios/listar-usuarios/listar-usuarios.component';
import { HomeComponent } from './components/views/home/home/home.component';
import { TaskComponentComponent } from './components/views/task/task-component/task-component.component';
import { ListarProjetosComponent } from './components/views/projeto/listar-projetos/listar-projetos.component';
import { CriarUsuarioComponent } from './components/views/usuarios/criar-usuario/criar-usuario.component';
import { ListarTasksComponent } from './components/views/task/listar-tasks/listar-tasks.component';


@NgModule({
  declarations: [AppComponent, CadastrarProjetosComponent, ListarUsuariosComponent, HomeComponent, TaskComponentComponent, ListarProjetosComponent, CriarUsuarioComponent, ListarTasksComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatSelectModule, MatGridListModule,MatSidenavModule,MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
