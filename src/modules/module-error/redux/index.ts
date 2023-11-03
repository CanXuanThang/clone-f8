/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 14/08/2023.
 *
 */

/** constants */
import { ERROR_ACTION } from '@module-error/constants';

/** types */
import type { StoreErrorType } from '@module-error/models';

const initialState: StoreErrorType = {
    notify: {
        open: false,
        message: '',
        mode: undefined,
        close: false,
        duration: undefined,
    },
} as const;

const toggleNotify = (state: StoreErrorType, payload: StoreErrorType['notify']) => ({
    ...state,
    notify: {
        open: !!payload?.message,
        message: payload?.message,
        mode: payload?.mode,
        close: payload?.close,
        duration: payload?.duration,
    },
});

function errorReducer(state = initialState, action: { type: string; payload?: any }) {
    const { type, payload } = action;
    switch (type) {
        case ERROR_ACTION.TOGGLE_NOTIFY:
            return toggleNotify(state, payload);
        default:
            return state;
    }
}

export default errorReducer;
