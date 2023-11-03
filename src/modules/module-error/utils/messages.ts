/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 14/08/2023.
 *
 */

import { createMessageIntl } from '@module-base/utils';

export const EN_ERROR = Object.freeze({
    'module.error.fallback.title': 'An error occurred',
    'module.error.fallback.content': 'Please try to run the application again',
    'module.error.fallback.retry': 'Retry',
    'module.error.fallback.autoReload': '( Auto reload after {second} seconds )',
});

export const VI_ERROR = Object.freeze({
    'module.error.fallback.title': 'Đã xảy ra lỗi',
    'module.error.fallback.content': 'Bạn hãy thử chạy lại ứng dụng',
    'module.error.fallback.retry': 'Thử lại',
    'module.error.fallback.autoReload': '( Tự động tải lại sau {second} giây )',
});

export const errorMessage = createMessageIntl(EN_ERROR);
