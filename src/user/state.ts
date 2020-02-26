import { IUserDto } from 'root/api/dto/account';
import { Nullable } from 'root/shared/types/nullable';

export class UserState {
    user: Nullable<IUserDto> = null;
    userLoading: boolean = false;
    userIsAuthenticated: boolean = false;
}
