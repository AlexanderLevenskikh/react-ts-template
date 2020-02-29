import { spawn } from 'redux-saga/effects';
import { userRegistrationSagaArray } from 'root/user/saga/registration';
import { userLoginSagaArray } from 'root/user/saga/login';
import { userLogoutSagaArray } from 'root/user/saga/logout';
import { getCurrentUserSagaArray } from 'root/user/saga/getUser';

export function* userSagaArray() {
    yield spawn(getCurrentUserSagaArray);
    yield spawn(userLogoutSagaArray);
    yield spawn(userLoginSagaArray);
    yield spawn(userRegistrationSagaArray);
}
