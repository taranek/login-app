export type AuthRequest = {
    email: string;
    password: string;
}
export type UserInfo = {
    name: string;
    email: string;
    pwdHash?: string;
    role?: number;
    id: number;
}