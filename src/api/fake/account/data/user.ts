import {IUserFakeDataEntity} from "root/api/fake/account/entity/user";
import uuid from "uuid";

export function createUserFakeDataStorage(): IUserFakeDataEntity[] {
    return [
        {
            id: uuid.v1(),
            email: 'admin@admin.ru',
            displayName: 'admin',
            firstName: 'FirstName',
            lastName: 'LastName',
            middleName: 'MiddleName',
            isAdmin: true,
            isSuperAdmin: true,
            isActive: true,
            lastLoggedIn: (new Date()).toISOString(),
            password: 'sampleHash',
        }
    ];
}
