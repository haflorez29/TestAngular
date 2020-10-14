export interface User {
    data: IUser
}

interface IUser {
    name: IName;
    gender: string;
    profession: string;
    knowFor: string
}

interface IName {
    first: string;
    last: string;
}
