import { DataCourse, DataRegister } from '@src/modules/module-global/models/apis';
import { CallApiDebounse, CallApiResponseData } from '@src/modules/module-global/models/type/AuthType';

type TAdminGet = {
    id: number;
    buyUser: DataRegister;
    course: DataCourse;
    totalBill: number;
    status: number;
};

type TBill = {
    content: TAdminGet[];
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

interface BillAdminApiProps {
    GetBill: {
        Payload: CallApiDebounse & { data: { pageIndex: number; pageSize: number } };
        Response?: TBill;
    };
    DeleteBill: {
        Payload: CallApiDebounse & { data: { id: number } };
        Response?: CallApiResponseData<any>;
    };
    Approve: {
        Payload: CallApiDebounse & { data: { id?: number } };
        Response?: any;
    };
}

export type { TBill, BillAdminApiProps, TAdminGet };
