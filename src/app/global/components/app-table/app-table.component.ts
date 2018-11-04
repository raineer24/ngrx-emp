import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit {

  @Input() displayedColumns: string[];
  @Input() dataSource: any;

  constructor() { }

  ngOnInit() {
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
