import {UserInfo} from "./model";

export const getUsersInfo = async ():Promise<UserInfo[] | undefined> => {
    try{
        const response = await fetch(
            new Request(`${process.env.REACT_APP_API_URL}/users/all`, {
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
        if(response.status === 200){
            return JSON.parse(await response.text());
        }
    }
    catch(e){
        console.error(e)
    }

}

