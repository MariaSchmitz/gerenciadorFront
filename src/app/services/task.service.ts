import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/projects';
import { User } from '../models/user';
import { Task } from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = "https://localhost:5001/api/task/"

  constructor(private http: HttpClient) { }

  list(): Observable<Task[]> {
    return this.http.get<Task[]>(`http://localhost:5000/api/task/list`);
  }

  listByProject(projectId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`http://localhost:5000/api/task/listbyproductid/${projectId}`);
  }

  createTask(task: Task) : Observable<Task> {
    return this.http.post<Task>(`http://localhost:5000/api/task/create`, task);
  }
}
