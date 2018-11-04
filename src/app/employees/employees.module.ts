import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListComponent } from './';
import { EmployeesRoutingModule } from './employees-routing.module';

const employeeRoutes = [{ path: '', component: EmployeeListComponent }];

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
})
export class EmployeesModule { }
