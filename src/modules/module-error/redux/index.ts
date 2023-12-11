/** constants */

/** types */
import type { StoreErrorType } from '@module-error/models';
import { ActionType, createCustomAction, getType } from 'typesafe-actions';

const initialState: StoreErrorType = {
    notify: {
        open: false,
        message: '',
        mode: undefined,
        close: false,
        duration: undefined,
    },
} as const;

export const toggleNotify = (state: StoreErrorType, payload: StoreErrorType['notify']) => ({
    ...state,
    notify: {
        open: !!payload?.message,
        message: payload?.message,
        mode: payload?.mode,
        close: payload?.close,
        duration: payload?.duration,
    },
});

const actions = { toggleNotify };

type Action = ActionType<typeof actions>;

function errorReducer(state = initialState, action: { type: Action; payload?: any }) {
    const { type, payload } = action;

    switch (type) {
        case 'notify':
            return toggleNotify(state, payload);
        default:
            return state;
    }
}

export default errorReducer;
