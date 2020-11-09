import { Injectable } from "@angular/core";

import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
} from "@angular/common/http";

import { Employee, User } from "../global/models";
import { map, tap, catchError, first } from "rxjs/operators";

import { Subject, Observable, BehaviorSubject, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  //private endpoint = "http://localhost:3000/employees";
  private endpoint = "http://localhost:3000/api/v2/users";

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.endpoint);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.endpoint).pipe(
      map((user) => {
        console.log("user", user["user"]);

        return user["user"];
      }),
      catchError(this.errorMgmt)
    );
  }

  getUserById(payload: number): Observable<User> {
    return this.http.get<User>(`${this.endpoint}/${payload}`).pipe(
      map((user) => {
        console.log("user", user["user"]);

        return user["user"];
      }),
      catchError(this.errorMgmt)
    );
  }

  getEmployeeById(payload: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.endpoint}/${payload}`);
  }

  createEmployee(payload: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.endpoint, payload);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.patch<Employee>(
      `${this.endpoint}/${employee.id}`,
      employee
    );
  }

  deleteEmployee(payload: number) {
    return this.http.delete(`${this.endpoint}/${payload}`);
  }

  // error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = "";
    console.log("error", error);

    if (error.error instanceof ErrorEvent) {
      // get client-side error
      errorMessage = error.error.message;
    } else {
      // get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
