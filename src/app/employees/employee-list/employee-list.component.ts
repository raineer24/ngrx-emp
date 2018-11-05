import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { Store } from '@ngrx/store';

import * as employeeActions from '../state/employee.actions';
import { Employee } from 'src/app/global/models';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  employees;
  columnName: string[];
  dataSource: MatTableDataSource<Employee>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new employeeActions.LoadEmployeesAction());
    this.store.subscribe(state => (this.employees = state.employees.employees));

    this.columnName = ['name', 'age', 'username', 'hiredate', 'actions'];
    // this.dataSource = new MatTableDataSource(this.employees);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

    console.log('employees: ', this.employees);
    
  }

}
