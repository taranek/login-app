import { UserInfo } from "api/auth-server/model";
import * as actionTypes from "./actions";

export type UsersState = {
  users: UserInfo[];
  loading: boolean;
};
const InitialState: UsersState = {
  users: [],
  loading: true,
};

export default function usersReducer(
  state = InitialState,
  action: { type: string; payload: UserInfo[] }
):UsersState {
  switch (action.type) {
    case actionTypes.FETCH_ALL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.FETCH_ALL_SUCCESS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case actionTypes.FETCH_ALL_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
