import { AuthRequest } from "./model";

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

}
const logoutUser = async () => await fetch(new Request(`${process.env.REACT_APP_API_URL}/auth/logout`, {
    method: "GET",
    headers: {
        "Accept":'application/json',
        "Content-Type":'application/json',
        "Access-Control-Allow-Credentials": "true",
        "Cache":'no-cache'
    },
    mode:"cors",
    credentials: 'include',
}))