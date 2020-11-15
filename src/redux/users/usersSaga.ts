import {UserInfo} from "../../api/auth-server/model";
import {call, put} from "redux-saga/effects";
import {getUsersInfo} from "../../api/auth-server/UsersApi";
import * as usersActions from "./actions";

export function* usersSaga() {
    try {
        const response: { users: UserInfo[] } = yield call(getUsersInfo);
        if (response.users) {
            yield put(usersActions.fetchUsersSuccess(response.users));
        }
    } catch (e) {
        yield put(usersActions.fetchUsersFailure());
    }
}

