import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { Project } from '../models/projects';
import { User } from '../models/user';
import { Task } from "../models/task";
import { Subtask } from "../models/subtask";

@Injectable({
  providedIn: 'root'
})
export class SubtaskService {
  private baseUrl = "https://localhost:5001/api/subtask/"

  constructor(private http: HttpClient) { }

  list(): Observable<Subtask[]> {
    return this.http.get<Subtask[]>(`http://localhost:5000/api/subtask/list`);
  }

  listByTask(taskId?: number): Observable<Subtask[]> {
    return this.http.get<Subtask[]>(`http://localhost:5000/api/subtask/listbytaskid/${taskId}`);
  }

  createTask(subtask: Subtask) : Observable<Subtask> {
    return this.http.post<Subtask>(`http://localhost:5000/api/subtask/create`, subtask);
  }
  deleteSubtask(subtaskId?: number) : Observable<Subtask> {
    return this.http.delete<Subtask>(`http://localhost:5000/api/subtask/delete/${subtaskId}`);
  }
  uptadeTask(subtask: Subtask) : Observable<Subtask> {
    return this.http.put<Subtask>(`http://localhost:5000/api/subtask/uptade`, subtask);
  }
}
