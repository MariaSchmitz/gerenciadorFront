import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UserService {

  private baseURL = "http://localhost:5000/api/user";

  constructor(private http: HttpClient) {}

  list(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/list`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseURL}/create`, user);
  }
}
