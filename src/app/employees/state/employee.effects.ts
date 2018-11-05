import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { EmployeeService } from '../employee.service';
import * as employeeActions from '../state/employee.actions';
import { Employee } from '../../global/models';

@Injectable()
export class EmployeeEffect {

    constructor(
        private actions$: Actions,
        private employeeService: EmployeeService
    ) {}

    @Effect()
    loadEmployees$: Observable<Action> = this.actions$.pipe(
        ofType<employeeActions.LoadEmployeesAction>(
            employeeActions.EmployeeActionTypes.LOAD_EMPLOYEES
        ),
        mergeMap((actions: employeeActions.LoadEmployeesAction) => 
            this.employeeService.getEmployees().pipe(
                map((employees: Employee[]) => 
                    new employeeActions.LoadEmployeesSuccessAction(employees)
                ),
                catchError(err => of(new employeeActions.LoadEmployeesFailureAction(err)))
            )
        )
    )
}