import { DataRegister } from '@src/modules/module-global/models/apis';
import { CallApiDebounse, CallApiResponseData } from '@src/modules/module-global/models/type/AuthType';

type TUser = {
    content: DataRegister[];
    pageable: {
        sort: {
            empty: boolean;
            unsorted: boolean;
            sorted: boolean;
        };
        offset: number;
        pageNumber: number;
        pageSize: number;
        unpage: boolean;
        page: boolean;
    };
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    };
    first: boolean;
    numberOfElements: number;
    empty: boolean;
};

interface UserAdminApiProps {
    GetAllUser: {
        Payload: CallApiDebounse & { data: { pageIndex: number; pageSize: number } };
        Response?: TUser;
    };
    DeleteUser: {
        Payload: CallApiDebounse & { data: { id: number } };
        Response?: CallApiResponseData<null>;
    };
}

export type { TUser, UserAdminApiProps };
