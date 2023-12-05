/** constants */
import { ERROR_ACTION } from '@module-error/constants';

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

export const toggleNotify = createCustomAction('notify', (data: StoreErrorType) => ({
    data,
}));

const actions = { toggleNotify };

type Action = ActionType<typeof actions>;

function errorReducer(state = initialState, action: Action) {
    switch (action.type) {
        case getType(toggleNotify):
            return {
                ...state,
                notify: {
                    open: !!action.data.notify.message,
                    message: action.data.notify.message,
                    mode: action.data.notify.mode,
                    close: action.data.notify.close,
                    duration: action.data.notify.duration,
                },
            };
        default:
            return state;
    }
}

export default errorReducer;
