import { useSelector } from "react-redux";
import { UserSelectors } from "root/user/selectors";

export function useApp() {
    const userIsAuthenticated = useSelector(UserSelectors.userIsAuthenticated);

    const showAuth = !userIsAuthenticated;

    return {
        showAuth,
    }
}
