import {IUserFakeDataEntity} from "root/api/fake/account/entity/user";
import {IUserDto} from "root/api/dto/account";

export class AccountFakeDataMappers {
    public static mapUserEntityToDto(entity: IUserFakeDataEntity): IUserDto {
        const {
            id, firstName, lastName, middleName, isActive, isSuperAdmin, isAdmin,
            lastLoggedIn, displayName, email,
        } = entity;

        return {
            id,
            username: email,
            firstName,
            lastName,
            middleName,
            displayName,
            email,
            isActive,
            isAdmin,
            isSuperAdmin,
            lastLoggedIn,
        }
    }
}
