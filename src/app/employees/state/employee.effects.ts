import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError, flatMap, take } from "rxjs/operators";

import { EmployeeService } from "../employee.service";
import * as employeeActions from "../state/employee.actions";
import { Employee, User } from "../../global/models";

@Injectable()
export class EmployeeEffect {
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}

  //   @Effect()
  //   loadEmployees$: Observable<Action> = this.actions$.pipe(
  //     ofType<employeeActions.LoadEmployeesAction>(
  //       employeeActions.EmployeeActionTypes.LOAD_EMPLOYEES
  //     ),
  //     mergeMap((actions: employeeActions.LoadEmployeesAction) =>
  //       this.employeeService.getEmployees().pipe(
  //         map(
  //           (employees: Employee[]) =>
  //             new employeeActions.LoadEmployeesSuccessAction(employees)
  //         ),
  //         catchError((err) =>
  //           of(new employeeActions.LoadEmployeesFailureAction(err))
  //         )
  //       )
  //     )
  //   );

  @Effect()
  loadEmployees$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.LoadEmployeesAction>(
      employeeActions.EmployeeActionTypes.LOAD_EMPLOYEES
    ),
    mergeMap((actions: employeeActions.LoadEmployeesAction) =>
      this.employeeService.getUsers().pipe(
        map(
          (users: User[]) =>
            new employeeActions.LoadEmployeesSuccessAction(users)
        ),
        catchError((err) =>
          of(new employeeActions.LoadEmployeesFailureAction(err))
        )
      )
    )
  );

  // @Effect()
  // loadEmployee$: Observable<Action> = this.actions$.pipe(
  //   ofType<employeeActions.LoadEmployeeAction>(
  //     employeeActions.EmployeeActionTypes.LOAD_EMPLOYEE
  //   ),
  //   mergeMap((action: employeeActions.LoadEmployeeAction) =>
  //     this.employeeService.getEmployeeById(action.payload).pipe(
  //       map(
  //         (employee: Employee) =>
  //           new employeeActions.LoadEmployeeSuccessAction(employee)
  //       ),
  //       catchError((err) =>
  //         of(new employeeActions.LoadEmployeeFailureAction(err))
  //       )
  //     )
  //   )
  // );

  // @Effect()
  // loadEmployee$: Observable<Action> = this.actions$.pipe(
  //   ofType<employeeActions.LoadEmployeeAction>(
  //     employeeActions.EmployeeActionTypes.LOAD_EMPLOYEE
  //   ),
  //   mergeMap((action: employeeActions.LoadEmployeeAction) =>
  //     this.employeeService.getUserById(action.payload).pipe(
  //       // map(
  //       //   (user: User) => new employeeActions.LoadEmployeeSuccessAction(user)
  //       // ),
  //       map(
  //         (user: User) => new employeeActions.LoadEmployeeSuccessAction(user)
  //       ),
  //       catchError((err) =>
  //         of(new employeeActions.LoadEmployeeFailureAction(err))
  //       )
  //     )
  //   )
  // );

  @Effect()
  loadEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.LoadEmployeeAction>(
      employeeActions.EmployeeActionTypes.LOAD_EMPLOYEE
    ),
    mergeMap((action: employeeActions.LoadEmployeeAction) =>
      this.employeeService.getUserById(action.payload).pipe(
        take(1),
        map(
          (user: User) => new employeeActions.LoadEmployeeSuccessAction(user)
        ),
        catchError((err) =>
          of(new employeeActions.LoadEmployeeFailureAction(err))
        )
      )
    )
    // flatMap((action: employeeActions.LoadEmployeeAction) => {
    //    this.employeeService.getUserById(action.payload).pipe(
    //     take(1),
    //     map((user) => {
    //       console.log("data", user);

    //       console.log("map effect");
    //       new employeeActions.LoadEmployeeSuccessAction(user);
    //       //return new userActions.LoadProfileSuccess(data["user"]);
    //     }),
    //     catchError((err) =>
    //       of(new employeeActions.LoadEmployeeFailureAction(err))
    //     )
    //   );
    // })
  );

  @Effect()
  createEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.CreateEmployeeAction>(
      employeeActions.EmployeeActionTypes.CREATE_EMPLOYEE
    ),
    map((action: employeeActions.CreateEmployeeAction) => action.payload),
    mergeMap((employee: User) =>
      this.employeeService.createEmployee(employee).pipe(
        map(
          (newEmployee: User) =>
            new employeeActions.CreateEmployeeSuccessAction(newEmployee)
        ),
        catchError((err) =>
          of(new employeeActions.CreateEmployeeFailureAction(err))
        )
      )
    )
  );

  @Effect()
  updateEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.UpdateEmployeeAction>(
      employeeActions.EmployeeActionTypes.UPDATE_EMPLOYEE
    ),
    map((action: employeeActions.UpdateEmployeeAction) => action.payload),
    mergeMap((user: User) =>
      this.employeeService.updateUser(user).pipe(
        map(
          (updateEmployee: User) =>
            new employeeActions.UpdateEmployeeSuccessAction({
              id: updateEmployee.id,
              changes: updateEmployee,
            })
        ),
        catchError((err) =>
          of(new employeeActions.UpdateEmployeeFailureAction(err))
        )
      )
    )
  );

  @Effect()
  deleteEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.DeleteEmployeeAction>(
      employeeActions.EmployeeActionTypes.DELETE_EMPLOYEE
    ),
    map((action: employeeActions.DeleteEmployeeAction) => action.payload),
    mergeMap((id: number) =>
      this.employeeService.deleteEmployee(id).pipe(
        map(() => new employeeActions.DeleteEmployeeSuccessAction(id)),
        catchError((err) =>
          of(new employeeActions.DeleteEmployeeFailureAction(err))
        )
      )
    )
  );
}
