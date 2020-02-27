import {IUserFakeDataEntity} from "root/api/fake/account/entity/user";
import {fakeDataStorage} from "root/api/fake/storage";
import {Nullable} from "root/shared/types/nullable";
import {NotFoundError} from "root/shared/model/errors/notFoundError";
import v1 from "uuid/v1";

export class UserFakeDataProvider {
    public static getUsers(): IUserFakeDataEntity[] {
        return fakeDataStorage.user;
    }

    public static findUser(id: string): Nullable<IUserFakeDataEntity> {
        return fakeDataStorage.user.find(user => user.id === id);
    }

    public static getUser(id: string): IUserFakeDataEntity {
        const user = fakeDataStorage.user.find(user => user.id === id);

        if (!user) {
            throw new NotFoundError({ message: 'User not found' });
        }

        return user;
    }

    public static createUser(entity: IUserFakeDataEntity): void {
        fakeDataStorage.user = [
            {
                id: v1(),
                ...entity,
            }
        ];
    }

    public static updateUser(entity: IUserFakeDataEntity): void {
        const index = fakeDataStorage.user.findIndex(user => user.id === entity.id);

        if (index === -1) {
            throw new NotFoundError({ message: 'User not found' });
        }

        fakeDataStorage.user = [
            ...fakeDataStorage.user.slice(0, index),
            entity,
            ...fakeDataStorage.user.slice(index + 1),
        ];
    }

    public static deleteUser(id: string): void {
        const index = fakeDataStorage.user.findIndex(user => user.id === id);

        if (index === -1) {
            throw new NotFoundError({ message: 'User not found' });
        }

        fakeDataStorage.user = [
            ...fakeDataStorage.user.slice(0, index),
            ...fakeDataStorage.user.slice(index + 1),
        ];
    }
}
