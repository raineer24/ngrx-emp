import { Action } from "@ngrx/store";
import { Update } from "@ngrx/entity";
import { Employee, User } from "../../global/models";

export enum EmployeeActionTypes {
  LOAD_EMPLOYEES = "[Employee] Load Employees",
  LOAD_EMPLOYEES_FAILURE = "[Employee] Load Employees Failure",
  LOAD_EMPLOYEES_SUCCESS = "[Employee] Load Employees Success",
  LOAD_EMPLOYEE = "[Employee] Load Employee",
  LOAD_EMPLOYEE_FAILURE = "[Employee] Load Employee Failure",
  LOAD_EMPLOYEE_SUCCESS = "[Employee] Load Employee Success",
  CREATE_EMPLOYEE = "[Employee] Create Employee",
  CREATE_EMPLOYEE_FAILURE = "[Employee] Create Employee Failure",
  CREATE_EMPLOYEE_SUCCESS = "[Employee] Create Employee Success",
  UPDATE_EMPLOYEE = "[Employee] Update Employee",
  UPDATE_EMPLOYEE_FAILURE = "[Employee] Update Employee Failure",
  UPDATE_EMPLOYEE_SUCCESS = "[Employee] Update Employee Success",
  DELETE_EMPLOYEE = "[Employee] Delete Employee",
  DELETE_EMPLOYEE_FAILURE = "[Employee] Delete Employee Failure",
  DELETE_EMPLOYEE_SUCCESS = "[Employee] Delete Employee Success",
}

export class LoadEmployeesAction implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEES;
}

export class LoadEmployeesFailureAction implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEES_FAILURE;
  constructor(public payload: string) {}
}

// export class LoadEmployeesSuccessAction implements Action {
//   readonly type = EmployeeActionTypes.LOAD_EMPLOYEES_SUCCESS;
//   constructor(public payload: Employee[]) {}
// }

export class LoadEmployeesSuccessAction implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEES_SUCCESS;
  constructor(public payload: User[]) {}
}

export class LoadEmployeeAction implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEE;
  constructor(public payload: number) {}
}

export class LoadEmployeeFailureAction implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEE_FAILURE;
  constructor(public payload: string) {}
}

export class LoadEmployeeSuccessAction implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEE_SUCCESS;
  constructor(public payload: Employee) {}
}

export class CreateEmployeeAction implements Action {
  readonly type = EmployeeActionTypes.CREATE_EMPLOYEE;
  constructor(public payload: Employee) {}
}

export class CreateEmployeeFailureAction implements Action {
  readonly type = EmployeeActionTypes.CREATE_EMPLOYEE_FAILURE;
  constructor(public payload: string) {}
}

export class CreateEmployeeSuccessAction implements Action {
  readonly type = EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS;
  constructor(public payload: Employee) {}
}

export class UpdateEmployeeAction implements Action {
  readonly type = EmployeeActionTypes.UPDATE_EMPLOYEE;
  constructor(public payload: Employee) {}
}

export class UpdateEmployeeFailureAction implements Action {
  readonly type = EmployeeActionTypes.UPDATE_EMPLOYEE_FAILURE;
  constructor(public payload: string) {}
}

export class UpdateEmployeeSuccessAction implements Action {
  readonly type = EmployeeActionTypes.UPDATE_EMPLOYEE_SUCCESS;
  constructor(public payload: Update<Employee>) {}
}

export class DeleteEmployeeAction implements Action {
  readonly type = EmployeeActionTypes.DELETE_EMPLOYEE;
  constructor(public payload: number) {}
}

export class DeleteEmployeeFailureAction implements Action {
  readonly type = EmployeeActionTypes.DELETE_EMPLOYEE_FAILURE;
  constructor(public payload: string) {}
}

export class DeleteEmployeeSuccessAction implements Action {
  readonly type = EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS;
  constructor(public payload: number) {}
}

export type Action =
  | LoadEmployeesAction
  | LoadEmployeesFailureAction
  | LoadEmployeesSuccessAction
  | LoadEmployeeAction
  | LoadEmployeeFailureAction
  | LoadEmployeeSuccessAction
  | CreateEmployeeAction
  | CreateEmployeeFailureAction
  | CreateEmployeeSuccessAction
  | UpdateEmployeeAction
  | UpdateEmployeeFailureAction
  | UpdateEmployeeSuccessAction
  | DeleteEmployeeAction
  | DeleteEmployeeFailureAction
  | DeleteEmployeeSuccessAction;
