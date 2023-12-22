import { CallApiDebounse, CallApiResponseData } from '../type/AuthType';
import { DataRegister } from './Auth';
import { DataCourse } from './Course';

type TQRCode = {
    qrCode: string;
    qrDataURL: string;
};

type TPayment = {
    id: number;
    buyUser: DataRegister;
    course: DataCourse;
    totalBill: number;
    status: number;
};

type TBuyer = {
    content: TPayment[];
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

interface BillApiProps {
    GetQRCode: {
        Payload: CallApiDebounse & { data: { courseId: number } };
        Response?: CallApiResponseData<TQRCode>;
    };
    Payment: {
        Payload: CallApiDebounse & { data: { courseId: number } };
        Response?: CallApiResponseData<TPayment>;
    };
    Buyer: {
        Payload: CallApiDebounse & { data: { pageIndex: number; pageSize: number } };
        Response?: TBuyer;
    };
}

export type { BillApiProps, TBuyer };
