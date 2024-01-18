import { TIMING_API_PENDING } from '@src/modules/module-base/constants';
import { debounce } from '@src/modules/module-base/hooks';
import { callAdminApi } from '@src/modules/module-base/apis/apiAdmin';
import { UserAdminApiProps } from '../models/User';

const COURSE_API_PATH = Object.freeze({
    GET_ALL_USER: '/user/get-page',
    DELETE_USER: (id: number) => `/user/${id}`,
});

const getAllUserApi = async (
    payload: UserAdminApiProps['GetAllUser']['Payload']
): Promise<UserAdminApiProps['GetAllUser']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.GET_ALL_USER,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callAdminApi<UserAdminApiProps['GetAllUser']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const deleteUserApi = async (
    payload: UserAdminApiProps['DeleteUser']['Payload']
): Promise<UserAdminApiProps['DeleteUser']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.DELETE_USER(data.id),
        method: 'delete',
    };
    const [{ response, error }] = await Promise.all([
        callAdminApi<UserAdminApiProps['DeleteUser']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

export { getAllUserApi, deleteUserApi };
