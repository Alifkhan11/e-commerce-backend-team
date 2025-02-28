export type TUser = {
    email: string,
    password: string,
    name: string,
    role: 'admin' | 'user',
    isDeleted:boolean
}