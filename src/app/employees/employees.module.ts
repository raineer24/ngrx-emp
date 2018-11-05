import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../global'

import { MaterialModule } from '../material';
import { EmployeesRoutingModule } from './employees-routing.module';

import { EffectsModule, Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { employeeReducer } from './state/employee.reducer';
import { EmployeeEffect } from './state/employee.effects';

import { EmployeeListComponent } from './';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    GlobalModule,
    MaterialModule,
    EmployeesRoutingModule,
    StoreModule.forFeature('employees', employeeReducer),
    EffectsModule.forFeature([EmployeeEffect])
  ],
  providers: [
    EmployeeService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeesModule { }
