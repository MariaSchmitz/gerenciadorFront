import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/projects';
import { User } from '../models/user';
import { Task } from "../models/task";

@Injectable({
  providedIn: 'root'
  
})
export class TaskService {

  taskSelecionada = new EventEmitter<number>();

  private baseUrl = "http://localhost:5001/api/task"

  constructor(private http: HttpClient) {}

  list(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/list`);
  }

  listByProject(projectId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/listbyprojectid/${projectId}`);
  }

  createTask(task: Task) : Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/create`, task);
  }

  getById(taskId: number) : Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/getbyid/${taskId}`);
  }
}
