/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 14/08/2023.
 *
 */

/** constants */
import { ERROR_STORE_KEY } from '@module-error/constants';

/** utils */
import { getState } from '@module-base/utils';

/** types */
import type { RootState } from '@module-base/models';
import type { StoreErrorType } from '@module-error/models';

const getNotifyBoundary = (state: RootState): StoreErrorType['notify'] => getState(state, [ERROR_STORE_KEY.ROOT, 'notify']);

export { getNotifyBoundary };
