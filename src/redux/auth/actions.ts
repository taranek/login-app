import { createAction } from 'redux-actions';
import {AuthRequest} from 'api/auth-server/model';

export const LOGIN_REQUEST =  'auth/LOGIN_REQUEST'
export const LOGIN_SUCCESS =  'auth/LOGIN_SUCCESS'
export const LOGIN_FAILURE =  'auth/LOGIN_FAILURE'

export const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE'


export const loginRequest = createAction(LOGIN_REQUEST, (payload:AuthRequest):AuthRequest  => payload);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);

export const logoutRequest = createAction(LOGOUT_REQUEST);
export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const logoutFailure = createAction(LOGOUT_FAILURE);