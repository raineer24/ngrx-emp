import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';

// import * as employeeActions from '../state/employee.actions';
// import * as fromEmployee from '../state/employee.reducer';

import * as countryActions from '../../countries/state/country.actions';
import * as fromCountry from '../../countries/state/country.reducer';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from 'src/app/global/models';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {
  currentUrl: string;
  title: string;
  countries$: Observable<Country[]>;

  constructor(private store: Store<fromCountry.AppState>) { }

  ngOnInit() {
    this.title = 'New Employee';
    this.store.dispatch(new countryActions.LoadCountriesAction());
    this.countries$ = this.store.pipe(select(fromCountry.getCountries));
  }

    

}
