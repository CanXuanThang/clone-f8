import { TIMING_API_PENDING } from '@src/modules/module-base/constants';
import { BillAdminApiProps } from '../models';
import { debounce } from '@src/modules/module-base/hooks';
import { callAdminApi } from '@src/modules/module-base/apis/apiAdmin';

const COURSE_API_PATH = Object.freeze({
    GET_BILL: '/bill/admin/get',
    DELETE_BILL: '/bill/cancel',
    APPROVE_BILL: '/bill/approve',
});

const getBillApi = async (
    payload: BillAdminApiProps['GetBill']['Payload']
): Promise<BillAdminApiProps['GetBill']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.GET_BILL,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callAdminApi<BillAdminApiProps['GetBill']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const deleteBillApi = async (
    payload: BillAdminApiProps['DeleteBill']['Payload']
): Promise<BillAdminApiProps['DeleteBill']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.DELETE_BILL,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callAdminApi<BillAdminApiProps['DeleteBill']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const approveBillApi = async (
    payload: BillAdminApiProps['Approve']['Payload']
): Promise<BillAdminApiProps['Approve']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.APPROVE_BILL,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callAdminApi<BillAdminApiProps['Approve']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

export { getBillApi, deleteBillApi, approveBillApi };
