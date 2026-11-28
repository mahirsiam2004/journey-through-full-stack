export interface IUser {
    id:number,
    name:string,
    email:string,
    password:string,
    role:"user" | "admin",
    created_at : Date;
}

export interface ICreateUser {
    name: string;
    email: string;
    password: string;
}