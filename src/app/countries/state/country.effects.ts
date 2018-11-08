import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CountryService } from '../country.service';
import * as countryActions from '../state/country.actions';
import { Country } from '../../global/models';

@Injectable()
export class CountryEffect {

    constructor(
        private actions$: Actions,
        private countryService: CountryService
    ) {}

    @Effect()
    loadCountries$: Observable<Action> = this.actions$.pipe(
        ofType<countryActions.LoadCountriesAction>(
            countryActions.CountryActionType.LOAD_COUNTRIES
        ),
        mergeMap((actions: countryActions.LoadCountriesAction) => 
            this.countryService.getCountries().pipe(
                map((countries: Country[]) => 
                    new countryActions.LoadCountriesSuccessAction(countries)
                ),
                catchError(err => of(new countryActions.LoadCountriesFailureAction(err)))
            )
        )
    );
}