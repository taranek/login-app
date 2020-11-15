import * as React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import ProtectedRoute from "../ProtectedRoute";

const PROPS = {
  fallback: "/fallback",
  targetRoute: "/target",
};

describe("ProtectedRoute", () => {
  global.fetch = jest.fn();

  it("should not render children if not logged in", () => {
    render(
      <Router>
        <ProtectedRoute {...PROPS}>{<div>Hello</div>}</ProtectedRoute>
      </Router>
    );
    expect(screen.queryByText("Hello")).toBeNull();
  });
  it("should make network calls to authorize user", () => {
    render(
      <Router>
        <ProtectedRoute {...PROPS}>{<div>Hello</div>}</ProtectedRoute>
      </Router>
    );
    expect(global.fetch).toBeCalled();
  });
});
