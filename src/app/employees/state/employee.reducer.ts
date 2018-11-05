import * as employeeActions from './employee.actions';
import { Employee } from '../../global/models';
import * as fromRoot from '../../state/app-state';

export interface EmployeeState {
    employees: Employee[];
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    employees: EmployeeState;
}

export const initialState: EmployeeState = {
    employees: [],
    loading: false,
    loaded: false,
    error: ''
};

export function employeeReducer(
    state = initialState,
    action: employeeActions.Action
): EmployeeState {
    switch (action.type) {
        case employeeActions.EmployeeActionTypes.LOAD_EMPLOYEES: {
            return {
                ...state,
                loading: true
            }
        }

        case employeeActions.EmployeeActionTypes.LOAD_EMPLOYEES_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                employees: action.payload
            };
        }

        case employeeActions.EmployeeActionTypes.LOAD_EMPLOYEES_FAILURE: {
            return {
                ...state,
                employees: [],
                loading: false,
                loaded: false,
                error: action.payload
            };
        }
    
        default: {
            return state;
        }
    }
}