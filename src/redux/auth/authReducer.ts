import * as actionTypes from './actions';
import {Action} from 'redux'

export type AuthState = {
    loggedIn: boolean;
    loading: boolean;
}
const InitialState: AuthState = {
    loggedIn: false,
    loading: false
}

export default function authReducer(state=InitialState, action: Action<string>):AuthState{
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:{
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.LOGIN_SUCCESS:{
            return {
                ...state,
                loggedIn: true,
                loading: false
            }
        }
        case actionTypes.LOGIN_FAILURE:{
            return {
                ...state,
                loggedIn: false,
                loading: false
            }
        }
        case actionTypes.LOGOUT_REQUEST:{
            return {
                ...state,
                loading: true,
            }
        }
        case actionTypes.LOGOUT_SUCCESS:{
            return {
                ...state,
                loggedIn: false,
                loading: false
            }
        }
        default:
            return state
    }

}