import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as employeeActions from '../../state/employee.actions';
import * as fromEmployee from '../../state/employee.reducer';
import { Employee, Country } from '../../../global/models';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeFormComponent implements OnInit {
  
  @Input() countries: Observable<Country[]>;
  @Input() disableForm: boolean;

  employeeForm: FormGroup;
  areaSelected: string = 'services';
  enableTipRate: boolean = false; 
  submitted = false;
  isAddUser: boolean;
  isNew: boolean;
  dropdownSelected: string;
  isDobValid: boolean;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<fromEmployee.AppState>
  ) { }

  ngOnInit() {    
    this.isNew = this.router.url === '/newuser';

    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      area: ['services', [Validators.required]],
      dob: ['', [
        Validators.required
      ]],
      jobtitle: ['', [Validators.required]],
      country: ['', [Validators.required]],
      username: ['', [
        Validators.required, 
        // Validators.pattern('/^[aA-zZ0-9-]+$/')
      ]],
      hiredate: ['', [Validators.required]],
      tiprate: ['%0.01', [Validators.required]],
      status: [false, [Validators.required]],
      id: this.isNew ? '' : null 
    });

    if(this.isNew) {
      this.employeeForm.valueChanges.subscribe( value => {    
        this.areaSelected = value.area;
      });
    }
    else {  
      const employee$: Observable<Employee> = this.store.select(
        fromEmployee.getCurrentElemployee
      );
  
      employee$.subscribe(currentEmployee => {
        if(currentEmployee) {
          this.dropdownSelected = currentEmployee.jobtitle;
          this.employeeForm.patchValue({
            name: currentEmployee.name,
            area: currentEmployee.area,
            dob: currentEmployee.dob,
            jobtitle: currentEmployee.jobtitle,
            country: currentEmployee.country,
            username: currentEmployee.username,
            hiredate: currentEmployee.hiredate,
            tiprate: currentEmployee.tiprate,
            status: currentEmployee.status,
            id: currentEmployee.id,
          });
        }
      });
    }

    if(this.disableForm) {
      this.employeeForm.disable();
    }
  }

  get f() {
    return this.employeeForm.controls;
  }

  onBack(): void {
    this.router.navigate(['/']);
  }

  setJob(value) {
    this.employeeForm.get('jobtitle').setValue(value);
    (value === 'waitress' || value === 'diningRoomManagers') 
      ? this.enableTipRate = true
      : this.enableTipRate = false;
  }

  CalculateAge(dob) {
      if(dob){
        var timeDiff = Math.abs(Date.now() - dob);
        return Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }

  validateDOB(e){
    let year = new Date(e).getFullYear();
    let today = new Date().getFullYear();

    if(today - year <= 100){
      this.isDobValid = false;
    }
}
  
  createEmployee() {
    if (this.employeeForm.valid) {
      this.submitted = true;

      const newEmployee: Employee = {
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

      newEmployee.age = this.CalculateAge(newEmployee.dob);
      this.store.dispatch(new employeeActions.CreateEmployeeAction(newEmployee));
      this.employeeForm.reset();
      this.router.navigate(['/']);
    }
  }

  updateEmployee() {
    const updateEmployee: Employee = {
      name: this.employeeForm.get('name').value,
      area: this.employeeForm.get('area').value,
      dob: this.employeeForm.get('dob').value,
      jobtitle: this.employeeForm.get('jobtitle').value,
      country: this.employeeForm.get('country').value,
      username: this.employeeForm.get('username').value,
      hiredate: this.employeeForm.get('hiredate').value,
      tiprate: this.employeeForm.get('tiprate').value,
      status: this.employeeForm.get('status').value,
      id: this.employeeForm.get('id').value,
    };

    this.store.dispatch(new employeeActions.UpdateEmployeeAction(updateEmployee));
    this.employeeForm.reset();
    this.router.navigate(['/']);
  }

}
