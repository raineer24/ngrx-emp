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
        console.log("data: ", user);

        console.log("user", user["user"]);

        return user["user"];
      }),
      catchError(this.errorMgmt)
    );
  }

  getUserById(payload: number): Observable<User> {
    const url = `http://localhost:3000/api/v2/users/profile/${payload}`;
    console.log("url", url);

    //const url = `${this.apiurl}/${id}`;
    // return this.http.get<User>(`${baseUrl}/${id}`);
    // const url = `${this.baseUrl}/api/v2/users/profile/${id}`;
    return this.http.get<User>(url).pipe(
      map((user) => {
        // console.log("user", user["user"].user_skill_set[0]);

        console.log("data", user);

        let areas_of_expertise = user["user"].user_skill_set[0].skills[0];
        // user.forEach((eachData) => {
        //   // console.log('Employee Name ---> ',eachData.addEmployee.firstName);
        //   // eachData.attendances.forEach(atten => {
        //   //   console.log('attendance Object -->',atten);

        //   //  return Object.assign({}, json, { skills });
        //   console.log("foreach", eachData);
        // });
        // console.log(Object.assign({}, user["user"], { areas_of_expertise }));
        return Object.assign({}, user["user"], { areas_of_expertise });

        //return user["user"];
      }),
      catchError(this.errorMgmt)
    );
  }

  // getUserById(payload: number): Observable<User> {
  //   return this.http.get<User>(`${this.endpoint}/${payload}`).pipe(
  //     map((user) => {
  //       console.log("user", user["user"]);

  //       return user["user"];
  //     }),
  //     catchError(this.errorMgmt)
  //   );
  // }

  // getUserById(payload: number): Observable<User> {
  //   const url = `http://localhost:3000/api/v2/users/profile/${payload}`;
  //   //private endpoint = "http://localhost:3000/api/v2/users";
  //   return this.http.get<User>(url).pipe(
  //     map((user) => {
  //       console.log("data", user);

  //       console.log("user", user["user"]);

  //       return user["user"];
  //     }),
  //     catchError(this.errorMgmt)
  //   );
  // }

  getEmployeeById(payload: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.endpoint}/${payload}`);
  }

  createEmployee(payload: User): Observable<User> {
    return this.http.post<User>(this.endpoint, payload);
  }

  // updateEmployee(employee: Employee): Observable<Employee> {
  //   return this.http.patch<Employee>(
  //     `${this.endpoint}/${employee.id}`,
  //     employee
  //   );
  // }

  updateUser(employee: User): Observable<User> {
    return this.http.put<User>(`${this.endpoint}/${employee.id}`, employee);
    //localhost:3000/api/v2/users/profile/12
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
