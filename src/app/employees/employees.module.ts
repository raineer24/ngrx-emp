import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../global'

import { MaterialModule } from '../material';
import { EmployeesRoutingModule } from './employees-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EffectsModule, Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { employeeReducer } from './state/employee.reducer';
import { EmployeeEffect } from './state/employee.effects';
import { EmployeeService } from './employee.service';

import { EmployeeListComponent, EmployeeAddComponent } from './';


@NgModule({
  declarations: [EmployeeListComponent, EmployeeAddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, FormsModule,
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
