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

import { countryReducer } from '../countries/state/country.reducer';
import { CountryEffect } from '../countries/state/country.effects';
import { CountryService } from '../countries/country.service';

import { EmployeeListComponent, EmployeeInfoComponent } from './';
import { EmployeeFormComponent } from './shared/employee-form/employee-form.component';
import { RatePipe } from './shared/rate.pipe';


@NgModule({
  declarations: [EmployeeListComponent, EmployeeInfoComponent, EmployeeFormComponent, RatePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule, FormsModule,
    GlobalModule,
    MaterialModule,
    EmployeesRoutingModule,
    StoreModule.forFeature('employees', employeeReducer),
    EffectsModule.forFeature([EmployeeEffect]),
    StoreModule.forFeature('countries', countryReducer),
    EffectsModule.forFeature([CountryEffect])
  ],
  providers: [
    EmployeeService, CountryService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeesModule { }
