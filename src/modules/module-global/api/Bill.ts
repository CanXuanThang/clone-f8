import { TIMING_API_PENDING } from '@src/modules/module-base/constants';
import { BillApiProps } from '../models/apis/Bill';
import { callApi } from '@src/modules/module-base/apis';
import { debounce } from '@src/modules/module-base/hooks';

const BILL = Object.freeze({
    QRCODE: '/bill/get-qrcode',
    PAYMENT: '/bill/payment',
});

const getQRCodeApi = async (
    payload: BillApiProps['GetQRCode']['Payload']
): Promise<BillApiProps['GetQRCode']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: BILL.QRCODE,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callApi<BillApiProps['GetQRCode']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const paymentApi = async (payload: BillApiProps['Payment']['Payload']): Promise<BillApiProps['Payment']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: BILL.PAYMENT,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([callApi<BillApiProps['Payment']['Response']>(options), debounce(timer)]);
    return error || response;
};

export { getQRCodeApi, paymentApi };
