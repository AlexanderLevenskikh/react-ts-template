import { Nullable } from 'root/shared/types/nullable';

export interface IUserFakeDataEntity {
    id: string;
    displayName: Nullable<string>;
    email: string;
    firstName: string;
    lastName: string;
    middleName: string;
    password: string;
    isActive: boolean;
    isAdmin: boolean;
    isSuperAdmin: boolean;
    lastLoggedIn: string;
}
