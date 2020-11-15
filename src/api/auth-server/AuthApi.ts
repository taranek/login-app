import {AuthCheckResponse, AuthRequest, UserInfo} from "./model";

export const loginUser = async (request: AuthRequest) => {
  return await fetch(
    new Request(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
        Cache: "no-cache",
      },
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(request),
    })
  );
};
export const logoutUser = async () =>
  await fetch(
    new Request(`${process.env.REACT_APP_API_URL}/auth/logout`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
        Cache: "no-cache",
      },
      mode: "cors",
      credentials: "include",
    })
  );

export const isLoggedIn = async (): Promise<boolean | undefined> => {
  try {
    const response = await fetch(
      new Request(`${process.env.REACT_APP_API_URL}auth/auth`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
          Cache: "no-cache",
        },
        mode: "cors",
        credentials: "include",
      })
    );
    if (response.status === 200) {
        const parsedResponse: AuthCheckResponse = JSON.parse(await response?.text());
        return parsedResponse?.loggedIn;
    }
  } catch (e) {
    console.error(e);
  }
};
