import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as employeeActions from '../state/employee.actions';
import * as fromEmployee from '../state/employee.reducer';
import { Employee, Country } from '../../global/models';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  employeeForm: FormGroup;
  areaSelected: string;
  // @Output() areaSelected = new EventEmitter<string>();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<fromEmployee.AppState>
  ) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      // id: null,
      name: ['', [
        Validators.required,
        Validators.max(255)
      ]],
      area: ['', [
        Validators.required,
      ]],
      dob: ['', [
        Validators.required
      ]],
      jobtitle: ['', [
        Validators.required
      ]],
      country: ['', [
        Validators.required
      ]],
      username: ['', [
        Validators.required
      ]],
      hiredate: ['', [
        Validators.required
      ]],
      tiprate: ['', [
        Validators.required
      ]],
      status: [false, [
        Validators.required
      ]],
    });

    // this.areaSelected = 'services';
    // console.log(this.employeeForm.value.area);
    

    this.employeeForm.valueChanges.subscribe( value => {
      console.log('area:', value);
      this.areaSelected = value.area;
      // this.areaSelected.emit(value.area);
    });


    // countries: Country[] = [
    //   {value: 'steak-0', viewValue: 'Steak'},
    //   {value: 'pizza-1', viewValue: 'Pizza'},
    //   {value: 'tacos-2', viewValue: 'Tacos'}
    // ];


    //update
    // const employee$: Observable<Employee> = this.store.select(
    //   fromEmployee.getCurrentElemployee
    // );

    // employee$.subscribe(currentEmployee => {
    //   if(currentEmployee) {
    //     this.employeeForm.patchValue({
    //       id: currentEmployee.id,
    //       name: currentEmployee.name,
    //       jobtitle: currentEmployee.jobtitle,
    //       age: currentEmployee.age,
    //       username: currentEmployee.username,
    //       hiredate: currentEmployee.hiredate,
    //     });
    //   }
    // })
  }


  onBack(): void {
    this.router.navigate(['/']);
  }

  createEmployee() {
    const newEmployee: Employee = {
      name: this.employeeForm.get('name').value, 
      jobtitle: this.employeeForm.get('jobtitle').value,
      age: this.employeeForm.get('age').value,
      username: this.employeeForm.get('username').value,
      hiredate: this.employeeForm.get('hiredate').value,
    };

    new employeeActions.CreateEmployeeAction(newEmployee);
    this.employeeForm.reset();
  }

  updateEmployee() {
    const updateEmployee: Employee = {
      id: this.employeeForm.get('id').value,
      name: this.employeeForm.get('name').value, 
      jobtitle: this.employeeForm.get('jobtitle').value,
      age: this.employeeForm.get('age').value,
      username: this.employeeForm.get('username').value,
      hiredate: this.employeeForm.get('hiredate').value,
    };

    this.store.dispatch(new employeeActions.UpdateEmployeeAction(updateEmployee));
  }

}
