import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import * as countryActions from "../../countries/state/country.actions";
import * as fromCountry from "../../countries/state/country.reducer";
import * as fromEmployee from "../state/employee.reducer";

import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Country, Employee, User } from "src/app/global/models";

@Component({
  selector: "app-employee-info",
  templateUrl: "./employee-info.component.html",
  styleUrls: ["./employee-info.component.scss"],
})
export class EmployeeInfoComponent implements OnInit {
  currentUrl: string;
  title: string;
  viewmode: string;
  disableForm: boolean;
  setAction: string;
  countries$: Observable<Country[]>;

  constructor(
    private store: Store<fromCountry.AppState>,
    private storeEmployee: Store<fromEmployee.AppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.title = "New Employee";
    this.setAction = "new";
    this.store.dispatch(new countryActions.LoadCountriesAction());
    this.countries$ = this.store.pipe(select(fromCountry.getCountries));
    let viewmode = this.route.snapshot.paramMap.get("viewmode");
    let id = this.route.snapshot.paramMap.get("id");

    const employee$: Observable<User> = this.storeEmployee.select(
      fromEmployee.getCurrentElemployee
    );

    employee$.subscribe((user) => {
      if (user) {
        if (viewmode) {
          this.title = `Viewing: ${user.username}`;
          this.disableForm = true;
        } else {
          if (id) {
            this.title = `Editing: ${user.username}`;
            this.setAction = "edit";
          }
          this.disableForm = false;
        }
      }
    });
  }
}
