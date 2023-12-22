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
