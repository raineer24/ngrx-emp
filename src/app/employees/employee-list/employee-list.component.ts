import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface EmployeeModel {
  name: string;
  age: number;
  username: string;
  hiredate: string;
}

const employees: EmployeeModel[] = [
  {name: 'Hydrogen', age: 20, username: 'user1', hiredate: '2017/10/01'},
  {name: 'Helium', age: 33, username: 'user2', hiredate: '2001/01/12'},
  {name: 'Lithium', age: 24, username: 'user3', hiredate: '2008/08/17'},
  {name: 'Beryllium', age: 43, username: 'user4', hiredate: '2007/06/08'},
  {name: 'Boron', age: 19, username: 'user5', hiredate: '2071/12/11'},
  {name: 'Nostro', age: 22, username: 'user6', hiredate: '2010/11/01'},
  {name: 'Metro', age: 44, username: 'user7', hiredate: '2101/07/21'},
];

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  
  columnName: string[];
  dataSource: MatTableDataSource<EmployeeModel>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.columnName = ['name', 'age', 'username', 'hiredate'];
    this.dataSource = new MatTableDataSource(employees);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    console.log('dataSource: ', this.dataSource);
    
  }

}
