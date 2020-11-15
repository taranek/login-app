import { createAction } from 'redux-actions';


export const FETCH_ALL_REQUEST =  'users/FETCH_ALL_REQUEST'
export const FETCH_ALL_SUCCESS =  'users/FETCH_ALL_SUCCESS'
export const FETCH_ALL_FAILURE =  'users/FETCH_ALL_FAILURE'

export const fetchUsersRequest = createAction(FETCH_ALL_REQUEST);
export const fetchUsersSuccess = createAction(FETCH_ALL_SUCCESS);
export const fetchUsersFailure = createAction(FETCH_ALL_FAILURE);