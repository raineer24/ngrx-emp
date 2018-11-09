import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Employee } from 'src/app/global/models';
import * as employeeActions from '../state/employee.actions';
import * as fromEmployee from '../state/employee.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {  
  columnName: string[];
  employees$: Observable<Employee[]>;
  error$: Observable<String>;

  constructor(private store: Store<fromEmployee.AppState>, private router: Router) { }

  ngOnInit() {
    this.columnName = ['name', 'age', 'username', 'hiredate', 'actions'];
    this.store.dispatch(new employeeActions.LoadEmployeesAction());
    this.employees$ = this.store.pipe(select(fromEmployee.getEmployees));
    this.error$ = this.store.pipe(select(fromEmployee.getError));
  }

  toggleButton(element){
    switch (element.action) {
      case 'detail':
        this.viewDetailEmployee(element.employee.id);
        break;

      case 'edit':
        this.editEmployee(element.employee.id);
        break;

      case 'delete':
        this.deleteEmployee(element.employee);
        break;
    
      default:
        break;
    }
  }
  
  viewDetailEmployee(employee: Employee) {
    this.store.dispatch(new employeeActions.LoadEmployeeAction(employee.id));
  }

  addEmployee() {
    this.router.navigate(['/newuser']);
  }
  
  editEmployee(employee: Employee) {
    this.store.dispatch(new employeeActions.LoadEmployeeAction(employee.id));
  }

  deleteEmployee(employee: Employee) {
    if(confirm('Are You Sure You want to Delete the Employee?')) {
      this.store.dispatch(new employeeActions.DeleteEmployeeAction(employee.id));
    }
  }

}
