import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent, EmployeeAddComponent } from './';

const routes: Routes = [
  { path: '', component: EmployeeListComponent},
  { path: 'newuser', component: EmployeeAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
