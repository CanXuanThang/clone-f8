import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import Cookies from 'js-cookie';
import { accessToken } from '@module-base/constants';

export const setAuth = createCustomAction('auth/setauth', (data: any) => ({
    data,
}));

export const setToken = createCustomAction('auth/token', (action: string, data: any) => ({
    action,
    data,
}));
export const logOut = createCustomAction('auth/logout');

const actions = { setAuth, logOut, setToken };

type Action = ActionType<typeof actions>;

export default function reduceAuth(state: any = {}, action: Action) {
    switch (action.type) {
        case getType(setAuth):
            return { ...state, auth: action.data };
        case getType(setToken):
            if (action.action === 'login') {
                return { ...state, token: action.data };
            }
            if (action.action === 'logout') {
                return { ...state, token: Cookies.remove(accessToken) };
            }
        case getType(logOut):
            Cookies.remove(accessToken);
        default:
            return state;
    }
}
