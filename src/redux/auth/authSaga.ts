import { call, put } from "redux-saga/effects";
import { loginUser, logoutUser } from "../../api/auth-server/AuthApi";
import * as authActions from "./actions";
import { AuthRequest } from "../../api/auth-server/model";
import * as usersActions from "../users/actions";

export function* logoutSaga() {
  try {
    const response = yield call(logoutUser);
    if (response.status === 200) {
      yield put(authActions.logoutFailure());
    }
  } catch (e) {
    yield put(authActions.logoutSuccess());
    yield window.location.reload(false);
  }
}

export function* loginSaga({ payload }: { payload: AuthRequest }) {
  try {
    const response: Response = yield call(loginUser, payload);
    if (response.status === 200) {
      yield put(authActions.loginSuccess());
      yield put(usersActions.fetchUsersRequest());
    }
  } catch (e) {
    yield put(authActions.loginFailure());
  }
}
