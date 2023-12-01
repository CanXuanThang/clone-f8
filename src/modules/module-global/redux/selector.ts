import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import Cookies from 'js-cookie';

export const setAuth = createCustomAction('auth/set-auth', (data: any) => ({
    data,
}));
export const logout = createCustomAction('auth/logout');

const actions = { setAuth, logout };

type Action = ActionType<typeof actions>;

export default function reduceAuth(state: any, action: Action) {
    switch (action.type) {
        case getType(setAuth):
            return { ...state, auth: action.data };
        case getType(logout):
            Cookies.remove('token');
        default:
            return state;
    }
}
