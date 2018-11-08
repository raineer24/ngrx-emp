import { Action } from '@ngrx/store';
import { Country } from '../../global/models';

export enum CountryActionType {
    LOAD_COUNTRIES = '[Country] Load Countries',
    LOAD_COUNTRIES_FAILURE = '[Country] Load Countries Failure',
    LOAD_COUNTRIES_SUCCESS = '[Country] Load Countries Success',
  }
  
  export class LoadCountriesAction implements Action {
    readonly type = CountryActionType.LOAD_COUNTRIES;
  }
  
  export class LoadCountriesFailureAction implements Action {
    readonly type = CountryActionType.LOAD_COUNTRIES_FAILURE;
    constructor(public payload: string) {}
  }
  
  export class LoadCountriesSuccessAction implements Action {
    readonly type = CountryActionType.LOAD_COUNTRIES_SUCCESS;
    constructor(public payload: Country[]) {}
  }

  export type Action = 
  LoadCountriesAction | 
  LoadCountriesFailureAction | 
  LoadCountriesSuccessAction;