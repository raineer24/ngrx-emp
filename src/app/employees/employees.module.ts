import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GlobalModule } from '../global'

import { EmployeeListComponent } from './';
import { EmployeesRoutingModule } from './employees-routing.module';

import { MaterialModule } from '../material';

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    GlobalModule,
    MaterialModule,
    EmployeesRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeesModule { }
