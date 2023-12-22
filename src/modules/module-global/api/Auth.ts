import { TIMING_API_PENDING } from '@module-base/constants';
import { AuthApiProps } from '../models/apis/Auth';
import { callApi } from '@module-base/apis';
import { debounce } from '@module-base/hooks';

const AUTH_API_PATH = Object.freeze({
    SIGN_IN: '/oauth/token',
    REGISTER: '/public/register',
    CHANGEPASSWORD: '/user/change-password',
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

const registerApi = async (payload: AuthApiProps['Register']['Payload']): Promise<AuthApiProps['Register']['Response']> => {
    const {
        timer = TIMING_API_PENDING,
        data: { username, email, password, confirmPassword, displayName, phoneNumber },
    } = payload;
    const options = {
        url: AUTH_API_PATH.REGISTER,
        method: 'post',
        data: { username, email, password, confirmPassword, displayName, phoneNumber },
    };
    const [{ response, error }] = await Promise.all([
        callApi<AuthApiProps['Register']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const changePasswordApi = async (
    payload: AuthApiProps['ChangePassword']['Payload']
): Promise<AuthApiProps['ChangePassword']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: AUTH_API_PATH.CHANGEPASSWORD,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callApi<AuthApiProps['ChangePassword']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

export { loginApi, registerApi, changePasswordApi };
