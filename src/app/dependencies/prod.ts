import { IDependencies } from 'root/app/dependencies/index';
import {AccountApi} from "root/api/prod/account";

export class ProdDependencies implements IDependencies {
    accountApi = new AccountApi();
}
