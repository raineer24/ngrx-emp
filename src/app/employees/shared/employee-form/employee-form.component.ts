import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as employeeActions from '../../state/employee.actions';
import * as fromEmployee from '../../state/employee.reducer';
import { Employee, Country } from '../../../global/models';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeFormComponent implements OnInit {
  
  @Input() countries: Observable<Country[]>;

  employeeForm: FormGroup;
  areaSelected: string = 'services';
  enableTipRate: boolean = false; 

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
      area: ['services', [
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

    this.employeeForm.valueChanges.subscribe( value => {
      console.log('area:', value.area);     
      this.areaSelected = value.area;
    });


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
    const newEmployee: any = {
      name: this.employeeForm.get('name').value,
      area: this.employeeForm.get('area').value,
      dob: this.employeeForm.get('dob').value,
      jobtitle: this.employeeForm.get('jobtitle').value,
      country: this.employeeForm.get('country').value,
      username: this.employeeForm.get('username').value,
      hiredate: this.employeeForm.get('hiredate').value,
      tiprate: this.employeeForm.get('tiprate').value,
      status: this.employeeForm.get('status').value,
    };

    new employeeActions.CreateEmployeeAction(newEmployee);
    this.employeeForm.reset();
  }

  updateEmployee() {
    const updateEmployee: any = {  //type:  Employee
      id: this.employeeForm.get('id').value,
      name: this.employeeForm.get('name').value,
      area: this.employeeForm.get('area').value,
      dob: this.employeeForm.get('dob').value,
      jobtitle: this.employeeForm.get('jobtitle').value,
      country: this.employeeForm.get('country').value,
      username: this.employeeForm.get('username').value,
      hiredate: this.employeeForm.get('hiredate').value,
      tiprate: this.employeeForm.get('tiprate').value,
      status: this.employeeForm.get('status').value,
    };

    this.store.dispatch(new employeeActions.UpdateEmployeeAction(updateEmployee));
  }

  newJob(value) {
    (value === 'waitress' || value === 'diningRoomManagers') 
      ? this.enableTipRate = true
      : this.enableTipRate = false;
  }
}
