import { takeLatest, put, call } from "redux-saga/effects";
import { AuthRequest, UserInfo } from "api/auth-server/model";
import * as authActions from "./auth/actions";
import * as usersActions from "./users/actions";
import { loginUser, logoutUser } from "api/auth-server/AuthApi";
import { getUsersInfo } from "api/auth-server/UsersApi";

function* loginSaga({ payload }: { payload: AuthRequest }) {
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

function* usersSaga() {
  try {
    const response: { users: UserInfo[] } = yield call(getUsersInfo);
    if (response.users) {
      yield put(usersActions.fetchUsersSuccess(response.users));
    }
  } catch (e) {
    yield put(usersActions.fetchUsersFailure());
  }
}

function* logoutSaga() {
  try {
   const response =  yield call(logoutUser);
    if (response.status === 200) {
      yield put(authActions.logoutFailure());
    }
  } catch (e) {
    yield put(authActions.logoutSuccess());
    yield window.location.reload(false);
  }
}

export default function* rootSaga() {
  yield takeLatest(authActions.loginRequest, loginSaga);
  yield takeLatest(usersActions.FETCH_ALL_REQUEST, usersSaga);
  yield takeLatest(authActions.LOGOUT_REQUEST, logoutSaga);
}
