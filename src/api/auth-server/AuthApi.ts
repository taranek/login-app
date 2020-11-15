import { AuthRequest } from "./model";
import axios from 'axios';

export const loginUser = async (request: AuthRequest) => {
 /*   const axiosResponse = await axios.post("http://localhost:3001/api/auth/login", request, {headers:{
        Accept: 'application/json',
        'Content-Type':'application/json',
        },withCredentials: true})
    console.log(axiosResponse)*/
    const response = await fetch(new Request("https://taranek-login-service.herokuapp.com/api/auth/login", {
        method: "POST",
        headers: {
            "Accept":'application/json',
            "Content-Type":'application/json',
            "Access-Control-Allow-Credentials": "true",
            "Cache":'no-cache'
        },
        mode:"cors",
        credentials: 'include',
        body: JSON.stringify(request)
    }))
}