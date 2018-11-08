import * as countryActions from './country.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Country } from '../../global/models';
import * as fromRoot from '../../state/app-state';

export interface CountryState {
    countries: Country[];
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    countries: CountryState;
}

export const initialState: CountryState = {
    countries: [],
    loading: false,
    loaded: false,
    error: ''
}

export function countryReducer(
    state = initialState,
    action: countryActions.Action
): CountryState {
    switch (action.type) {

        case countryActions.CountryActionType.LOAD_COUNTRIES: {
            return {
              ...state,
              loading: true,
            }
          }

        case countryActions.CountryActionType.LOAD_COUNTRIES_SUCCESS: {
            return {
              ...state,
              loading: false,
              loaded: true,
              countries: action.payload
            }
          }

        case countryActions.CountryActionType.LOAD_COUNTRIES_FAILURE: {
            return {
                ...state,
                countries: [],
                loading: false,
                loaded: false,
                error: action.payload
            }
        }

        default: {
            return state;
        }
    }
}

const getCountryFeatureState = createFeatureSelector<CountryState>(
    "countries"
);

export const getCountries = createSelector(
    getCountryFeatureState,
    (state: CountryState) => state.countries
);

export const getCountriesLoading = createSelector(
    getCountryFeatureState,
    (state: CountryState) => state.loading
);

export const getCountriesLoaded = createSelector(
    getCountryFeatureState,
    (state: CountryState) => state.loaded
);

export const getError = createSelector(
    getCountryFeatureState,
    (state: CountryState) => state.error
);