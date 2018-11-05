import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Employee } from 'src/app/global/models';
import * as employeeActions from '../state/employee.actions';
import * as fromEmployee from '../state/employee.reducer';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  
  columnName: string[];
  employees$: Observable<Employee[]>;
  error$: Observable<String>;
  
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  // dataSource: MatTableDataSource<Employee>;

  constructor(private store: Store<fromEmployee.AppState>) { }

  ngOnInit() {
    this.columnName = ['name', 'age', 'username', 'hiredate', 'actions'];

    this.store.dispatch(new employeeActions.LoadEmployeesAction());
    this.employees$ = this.store.pipe(select(fromEmployee.getEmployees));
    this.error$ = this.store.pipe(select(fromEmployee.getError));

    // this.dataSource = new MatTableDataSource(this.employees);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    
  }

  deleteEmployee(employee: Employee) {
    if(confirm('Are You Sure You want to Delete the Employee?')) {
      this.store.dispatch(new employeeActions.DeleteEmployeeAction(employee.id));
    }
  }

  editEmployee(employee: Employee) {
    this.store.dispatch(new employeeActions.LoadEmployeeAction(employee.id));
  }


}
