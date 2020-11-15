import authReducer, { AuthState } from "../authReducer";
import * as actions from "../actions";

const LOGGED_OUT_INITIAL: AuthState = {
  loggedIn: false,
  loading: false,
};

const LOGGED_IN_INITIAL: AuthState = {
  loggedIn: true,
  loading: false,
};

const PAYLOAD = {
  email: "",
  password: "",
};

describe("Auth reducer", () => {
  it(`sets the loading state when starting the logout`, () => {
    expect(
      authReducer(LOGGED_IN_INITIAL, actions.logoutRequest()).loading
    ).toBeTruthy();
  });
  it(`sets the loading state when starting the login`, () => {
    expect(
      authReducer(LOGGED_IN_INITIAL, actions.loginRequest(PAYLOAD)).loading
    ).toBeTruthy();
  });
  it(`sets isLoggedFlag to true if login is successful`, () => {
    expect(
      authReducer(LOGGED_OUT_INITIAL, actions.loginSuccess()).loggedIn
    ).toBeTruthy();
  });
  it(`sets isLoggedFlag to false if logout is successful`, () => {
    expect(
      authReducer(LOGGED_IN_INITIAL, actions.logoutSuccess()).loggedIn
    ).toBeFalsy();
  });
});
