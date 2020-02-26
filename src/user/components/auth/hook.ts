import { useSelector } from "react-redux";
import { UserSelectors } from "root/user/selectors";

export function useUserAuth() {
    const userIsAuthenticated = useSelector(UserSelectors.userIsAuthenticated);

    return {
        userIsAuthenticated,
    }
}
