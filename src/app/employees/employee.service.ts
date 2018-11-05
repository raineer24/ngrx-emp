import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Employee } from "../global/models";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private endpoint = "http://localhost:3000/employees";

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.endpoint);
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
}