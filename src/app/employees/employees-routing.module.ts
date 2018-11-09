import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent, EmployeeInfoComponent } from './';

const routes: Routes = [
  { path: '', component: EmployeeListComponent},
  { path: 'newuser', component: EmployeeInfoComponent},
  { path: 'edituser/:id', component: EmployeeInfoComponent},
  { path: 'listuser', component: EmployeeInfoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
