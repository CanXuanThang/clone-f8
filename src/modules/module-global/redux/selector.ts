import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import Cookies from 'js-cookie';
import { accessToken } from '@module-base/constants';

export interface AuthState {
    auth?: any;
}

export const setAuth = createCustomAction('auth/set-auth', (data: AuthState) => ({
    data,
}));
export const logout = createCustomAction('auth/logout');

const actions = { setAuth, logout };

type Action = ActionType<typeof actions>;

export default function reduceAuth(state: AuthState = {}, action: Action) {
    switch (action.type) {
        case getType(setAuth):
            return { ...state, auth: action.data };
        case getType(logout):
            Cookies.remove(accessToken);
        default:
            return state;
    }
}
