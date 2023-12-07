import { TIMING_API_PENDING } from '@module-base/constants';
import { AuthApiProps } from '../models/apis/Auth';
import { callApi } from '@module-base/apis';
import { debounce } from '@module-base/hooks';

const AUTH_API_PATH = Object.freeze({
    SIGN_IN: '/oauth/token',
});

const loginApi = async (payload: AuthApiProps['SignIn']['Payload']): Promise<AuthApiProps['SignIn']['Response']> => {
    const {
        timer = TIMING_API_PENDING,
        data: { username, password },
    } = payload;
    const options = {
        url: AUTH_API_PATH.SIGN_IN,
        method: 'post',
        data: { username, password },
    };
    const [{ response, error }] = await Promise.all([
        callApi<AuthApiProps['SignIn']['Response']>(options, true),
        debounce(timer),
    ]);
    return error || response;
};

export { loginApi };
