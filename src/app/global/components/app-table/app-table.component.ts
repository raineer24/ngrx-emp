import { Component, OnInit, Input, ViewChild, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { Employee } from '../../models';
import { Store } from '@ngrx/store';
import * as fromEmployee from '../../../employees/state/employee.reducer';
import * as employeeActions from '../../../employees/state/employee.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() displayedColumns: string[];
  @Input() dataSource: Observable<Employee[]>;
  @Output() actionButton: EventEmitter<any> = new EventEmitter();
  
  employee;

  constructor(private store: Store<fromEmployee.AppState>, private router: Router) { }

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
  
  actionClick(employee, action) {
    if(action === 'detail') {
      this.store.dispatch(new employeeActions.LoadEmployeeAction(employee.id));
      this.router.navigate(['/listuser', {id: employee.id, viewmode: true}]);
    }

    if(action === 'edit') {
      this.store.dispatch(new employeeActions.LoadEmployeeAction(employee.id));
      this.router.navigate(['/edituser', employee.id]);
    }

    if(action === 'delete') {
      let data = { employee: employee, action: action};
      this.actionButton.emit(data);
    }
  }

}
