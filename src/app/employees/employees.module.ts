import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListComponent } from './';
import { EmployeesRoutingModule } from './employees-routing.module';

import { MaterialModule } from '../material';

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    EmployeesRoutingModule
  ],
})
export class EmployeesModule { }
