import { IUserFakeDataEntity } from 'root/api/fake/account/entity/user';

export enum FakeUserIds {
    Admin = '192da156-cb30-46ee-ae3a-463e18f4acf2',
}

export function createUserFakeDataStorage(): IUserFakeDataEntity[] {
    return [
        {
            id: FakeUserIds.Admin,
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
        },
    ];
}
