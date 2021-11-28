import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = "http://localhost:5001/api/project"

  constructor(private http: HttpClient) { }

  list(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/list`);
  }

  getById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/getbyid/${id}`);
  }

  create(project: Project) : Observable<Project> {
    return this.http.post<Project>(`${this.baseUrl}/create`, project);
  }
}
