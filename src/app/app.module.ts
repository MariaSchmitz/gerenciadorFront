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
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';

// componentes da aplicação
import { CadastrarProjetosComponent } from './components/views/projeto/cadastrar-projetos/cadastrar-projetos.component';
import { ListarUsuariosComponent } from './components/views/usuarios/listar-usuarios/listar-usuarios.component';
import { HomeComponent } from './components/views/home/home/home.component';
import { TaskComponentComponent,TaskComponentComponentDialog,TaskComponentComponentDialogError } from './components/views/task/task-component/task-component.component';
import { ListarProjetosComponent } from './components/views/projeto/listar-projetos/listar-projetos.component';
import { CriarUsuarioComponent } from './components/views/usuarios/criar-usuario/criar-usuario.component';
import { ListarTasksComponent } from './components/views/task/listar-tasks/listar-tasks.component';
import { TaskListSubtaskComponent } from './components/views/task/task-list-subtask/task-list-subtask.component';
import { VerProjetoComponent } from './components/views/projeto/ver-projeto/ver-projeto.component';


@NgModule({
  declarations: [AppComponent, CadastrarProjetosComponent, ListarUsuariosComponent, HomeComponent, TaskComponentComponent,TaskComponentComponentDialog,TaskComponentComponentDialogError, ListarProjetosComponent, CriarUsuarioComponent, ListarTasksComponent, TaskListSubtaskComponent, VerProjetoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatSelectModule, MatGridListModule,MatSidenavModule,MatListModule,MatProgressBarModule,MatSlideToggleModule,MatDialogModule,MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
