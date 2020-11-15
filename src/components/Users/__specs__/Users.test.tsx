import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer, store } from "../../../App";
import Users from "../../Users/Users";
import * as React from "react";
import { fetchUsersSuccess } from "../../../redux/users/actions";

const TRANSLATIONS_MOCK = {};
const USERS_MOCK = [
  { name: "Jan", id: 12, email: "my@mail.com" },
  { name: "John Doe", id: 123, email: "mysupermail@mail.com" },
];

describe("Users components", () => {
  global.fetch = jest.fn(() => ({ status: 200 }));

  beforeEach(() => {
    fetch.mockClear();
  });
  store.dispatch(fetchUsersSuccess(USERS_MOCK));
  it("should fetch API to get users", async () => {
    render(
      <IntlProvider messages={TRANSLATIONS_MOCK} locale="en" defaultLocale="en">
        <Provider store={store}>
          <Users />
        </Provider>
      </IntlProvider>
    );

    await waitFor(() => {
      expect(global.fetch).toBeCalled();
    }, 500);
  });
    it("should display users from state", async () => {
        render(
            <IntlProvider messages={TRANSLATIONS_MOCK} locale="en" defaultLocale="en">
                <Provider store={store}>
                    <Users />
                </Provider>
            </IntlProvider>
        );

        await waitFor(() => {
            expect(screen.getByText('Jan')).toBeTruthy();
            expect(screen.getByText('John Doe')).toBeTruthy();
        }, 500);
    });
});
