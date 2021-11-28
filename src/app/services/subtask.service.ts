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
  private baseUrl = "http://localhost:5001/api/subtask"

  constructor(private http: HttpClient) { }

  list(): Observable<Subtask[]> {
    return this.http.get<Subtask[]>(`${this.baseUrl}/list`);
  }

  listByTask(taskId?: number): Observable<Subtask[]> {
    return this.http.get<Subtask[]>(`${this.baseUrl}/listbytaskid/${taskId}`);
  }
  listBySubtask(subtaskId?: number): Observable<Subtask[]> {
    return this.http.get<Subtask[]>(`${this.baseUrl}/getbyid/${subtaskId}`);
  }
  createSubTask(subtask: Subtask) : Observable<Subtask> {
    return this.http.post<Subtask>(`${this.baseUrl}/create`, subtask);
  }
  deleteSubtask(subtaskId?: number) : Observable<Subtask> {
    return this.http.delete<Subtask>(`${this.baseUrl}/delete/${subtaskId}`);
  }
  uptadeSubTask(subtask: Subtask) : Observable<Subtask> {
    return this.http.put<Subtask>(`${this.baseUrl}/update`, subtask);
  }
}
