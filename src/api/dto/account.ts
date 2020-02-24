import { Nullable } from 'root/shared/types/nullable';
import { IMap } from 'root/shared/types/iMap';

export interface ILoginEventDto {
    userIdentifier: string;
    password: string;
    rememberMe?: boolean;
}

export interface ISessionInfoDto {
    user: IUserDto;
    tokenResource: ITokenResourceDto;
    roles: IRoleDto[];
}

export interface IUserDto {
    id: string;
    username: Nullable<string>;
    displayName: Nullable<string>;
    firstName: string;
    middleName: string;
    lastName: string;
    isActive: boolean;
    isSuperAdmin: boolean;
    isAdmin: boolean;
    email: string;
    lastLoggedIn: Nullable<string>;
}

export interface ITokenResourceDto {
    accessToken: string;
    refreshToken: string;
}

export interface IRoleDto {
    id: number;
    name: string;
    permissions: IMap<RolePermission>;
    description: Nullable<string>;
    remarks: Nullable<string>;
    isSystemDefault: boolean;
}

export enum RolePermission {
    // convenience operation that indicates that nothing is allowed
    None = 0x00, // 0000
    // right to newly create an item
    Create = 0x01, // 0001
    // right to access (read) an item.
    Read = 0x02, // 0010
    // right modify an existing item.
    Update = 0x04, // 0100
    // right to delete create an
    Delete = 0x08, // 1000
    // convenience operation that holds all operations
    All = Create | Read | Update | Delete , // 1111
}

export interface ISendUserActivationDto {
    email: string;
    baseUrl: Nullable<string>;
}

export interface ISendCurrentUserActivationDto {
    baseUrl: Nullable<string>;
}
