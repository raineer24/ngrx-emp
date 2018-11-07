import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs';
import { Employee } from '../../models';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() displayedColumns: string[];
  @Input() dataSource: Observable<Employee[]>;

  employee;

  constructor() { }

  ngOnInit() {
    this.dataSource.subscribe( res => { 
      this.employee = new MatTableDataSource(res);
      this.employee.paginator = this.paginator;
      this.employee.sort = this.sort;    
    });
  }

  applyFilter(filterValue: string) {
    this.employee.filter = filterValue.trim().toLowerCase();

    if (this.employee.paginator) {
      this.employee.paginator.firstPage();
    }
  }

  actionClick(index: number) {
    console.log('index: ', index);

  }

}
