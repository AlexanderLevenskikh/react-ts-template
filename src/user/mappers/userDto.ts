import { IUserDto } from 'root/api/dto/account';
import { UserView } from 'root/user/types/user';

// TODO Определиться с набором полей
export function mapUserDtoToView(dto: IUserDto): UserView {
    return {
        name: dto.displayName || '',
    }
}
