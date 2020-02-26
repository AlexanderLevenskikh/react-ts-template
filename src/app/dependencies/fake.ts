import {IDependencies} from "root/app/dependencies/index";
import {proxifyFakeApiRequestsWithLogging} from "root/shared/utils/fakeApiRequestsProxyWithLogging";
import {AccountFakeApi} from "root/api/fake/account";

export class FakeDependencies implements IDependencies {
    accountApi = proxifyFakeApiRequestsWithLogging(new AccountFakeApi());
}
