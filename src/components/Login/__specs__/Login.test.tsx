import * as React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "App";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Login from "../Login";
import { IntlProvider } from "react-intl";


const TRANSLATIONS_MOCK = {
  "GLOBAL.EMAIL": "Email",
  "GLOBAL.PASSWORD": "Password",
  "GLOBAL.NAME": "Name",

  "LOGIN.WELCOME-MESSAGE": "Welcome to the demo app!",
  "LOGIN.PLEASE-LOGIN": "Please log in with credentials:",
  "LOGIN.LOGIN-ACTION": "Login",
  "LOGIN.LOGOUT-ACTION": "Logout",

  "LOGIN.ERRORS.EMAIL": "Please provide a valid email.",
  "LOGIN.ERRORS.PASSWORD":
    "Password should contain at least 8 letters, a digit and at least 1 uppercase letter.",
  "LOGIN.ERRORS.SUBMIT": "Failed to log in",
};
describe("Login", () => {
  global.fetch = jest.fn();

  beforeEach(() => {
    fetch.mockClear();
  });

  const { container } = render(
    <IntlProvider messages={TRANSLATIONS_MOCK} locale="en" defaultLocale="en">
      <Provider store={store}>
        <Login />
      </Provider>
    </IntlProvider>
  );
  const passwordInput = screen.getByPlaceholderText(
    "Password"
  ) as HTMLInputElement;
  const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement;
  const submitButton = container.querySelector(
    ".login-submit"
  ) as HTMLButtonElement;
  it("should render inputs with correct tranlations", () => {
    expect(passwordInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
  });
  it("should render submit button", () => {
    expect(submitButton).toBeTruthy();
  });
  it("should validate form on submit", async () => {
    const { container } = render(
      <IntlProvider messages={TRANSLATIONS_MOCK} locale="en" defaultLocale="en">
        <Provider store={store}>
          <Login />
        </Provider>
      </IntlProvider>
    );
    const passwordInput = screen.getByPlaceholderText(
      "Password"
    ) as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement;
    const submitButton = container.querySelector(
      ".login-submit"
    ) as HTMLButtonElement;

    fireEvent.change(emailInput, { target: { value: "email" } });
    fireEvent.change(passwordInput, { target: { value: "pass" } });

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(
        screen.getByText(TRANSLATIONS_MOCK["LOGIN.ERRORS.EMAIL"])
      ).toBeTruthy();
      expect(
        screen.getByText(TRANSLATIONS_MOCK["LOGIN.ERRORS.PASSWORD"])
      ).toBeTruthy();
      expect(global.fetch).toBeCalledTimes(0);
    });
  });
    it("should fetch API when valid form is submitted", async () => {
        const { container } = render(
            <IntlProvider messages={TRANSLATIONS_MOCK} locale="en" defaultLocale="en">
                <Provider store={store}>
                    <Login />
                </Provider>
            </IntlProvider>
        );
        const passwordInput = screen.getByPlaceholderText(
            "Password"
        ) as HTMLInputElement;
        const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement;
        const submitButton = container.querySelector(
            ".login-submit"
        ) as HTMLButtonElement;

        fireEvent.change(emailInput, { target: { value: "myvalid@gmail.com" } });
        fireEvent.change(passwordInput, { target: { value: "Correct0Password21" } });

        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(
                screen.queryByText(TRANSLATIONS_MOCK["LOGIN.ERRORS.EMAIL"])
            ).toBeNull()
            expect(
                screen.queryByText(TRANSLATIONS_MOCK["LOGIN.ERRORS.PASSWORD"])
            ).toBeNull()
            expect(global.fetch).toBeCalled();
        });
    });
});
