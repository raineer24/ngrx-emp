import { Action } from '@ngrx/store';
import { Employee } from '../../global/models';

export enum EmployeeActionTypes {
  LOAD_EMPLOYEES = '[Employee] Load Employees',
  LOAD_EMPLOYEES_FAILURE = '[Employee] Load Employee Failure',
  LOAD_EMPLOYEES_SUCCESS = '[Employee] Load Employee Success'
}

export class LoadEmployeesAction implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEES;
}

export class LoadEmployeesFailureAction implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEES_FAILURE;
  constructor(public payload: string) {}
}

export class LoadEmployeesSuccessAction implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEES_SUCCESS;
  constructor(public payload: Employee[]) {}
}

export type Action = LoadEmployeesAction | LoadEmployeesFailureAction | LoadEmployeesSuccessAction;