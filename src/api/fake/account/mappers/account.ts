import {IUserFakeDataEntity} from "root/api/fake/account/entity/user";
import { IRegistrationEventDto, IUserDto } from 'root/api/dto/account';
import uuid from 'uuid';

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

    public static mapRegistrationEventToUser(event: IRegistrationEventDto): IUserFakeDataEntity {
        return {
            id: uuid.v1(),
            email: event.email,
            displayName: event.shortName,
            firstName: event.firstName,
            lastName: event.secondName,
            middleName: event.surname,
            isAdmin: false,
            isActive: false,
            isSuperAdmin: false,
            lastLoggedIn: '',
            password: event.password,
        }
    }
}
