export interface CredentialsInterface {
    mail: string;
    password: string;
}

export interface UserInfosInterface {
    mail: string;
    password: string;
    firstname: string;
    lastname: string;
}

export interface User {
    id: number;
    mail: string;
    role: string;
    firstname?: string;
    lastname?: string;
}

export interface UserIDs {
    id: number;
    mail: string;
}

// export interface Category {
//     id_category: number;
//     name_category: string;

// }