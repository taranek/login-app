import usersReducer, { UsersState } from "../usersReducer";
import * as actions from "../actions";

const INITIAL_STATE: UsersState = {
  loading: false,
  users: [],
};

const PAYLOAD = {
  users: [{ name: "Jan", id: 12, email: "my@mail.com" }, { name: "John Doe", id: 123, email: "mysupermail@mail.com" }],
};
describe("Users reducer", () => {
  it(`sets the loading state when started fetching the users`, () => {
    expect(
      usersReducer(INITIAL_STATE, actions.fetchUsersRequest()).loading
    ).toBeTruthy();
  });
  it(`sets the loading state when finished fetching the users`, () => {
    expect(
      usersReducer(INITIAL_STATE, actions.fetchUsersSuccess()).loading
    ).toBeFalsy();
  });
  it(`sets users field when given payload`, () => {
    expect(
        usersReducer(INITIAL_STATE, actions.fetchUsersSuccess(PAYLOAD)).users
    ).toBe(PAYLOAD);

  });
});
