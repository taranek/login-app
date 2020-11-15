import { takeLatest } from "redux-saga/effects";
import * as authActions from "./auth/actions";
import * as usersActions from "./users/actions";
import {loginSaga, logoutSaga} from './auth/authSaga'
import {usersSaga} from './users/usersSaga'

export default function* rootSaga() {
  yield takeLatest(authActions.loginRequest, loginSaga);
  yield takeLatest(usersActions.FETCH_ALL_REQUEST, usersSaga);
  yield takeLatest(authActions.LOGOUT_REQUEST, logoutSaga);
}
