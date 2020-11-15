// THIS FILE SHOULD BE GENERATED AUTOMATICALLY BY TOOLS LIKE OPEN-API CLI
export type AuthRequest = {
    email: string;
    password: string;
}
export type UserInfo = {
    name: string;
    email: string;
    id: number;
    pwdHash?: string;
    role?: number;
}
export type AuthCheckResponse = {
    loggedIn: boolean;
}