import { IUserDto } from 'root/api/dto/account';
import { Nullable } from 'root/shared/types/nullable';

export interface IUserState {
    user: Nullable<IUserDto>;
    userLoading: boolean;
    userIsAuthenticated: boolean;
}
