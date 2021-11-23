import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  list(): Observable<Project[]> {
    return this.http.get<Project[]>(`http://localhost:5001/api/project/list`);
  }

  getById(id: number): Observable<Project> {
    return this.http.get<Project>(`http://localhost:5001/api/project/getbyid/${id}`);
  }

  create(project: Project) : Observable<Project> {
    return this.http.post<Project>(`http://localhost:5001/api/project/create`, project);
  }
}
