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

interface BillApiProps {
    GetQRCode: {
        Payload: CallApiDebounse & { data: { courseId: number } };
        Response?: CallApiResponseData<TQRCode>;
    };
    Payment: {
        Payload: CallApiDebounse & { data: { courseId: number } };
        Response?: CallApiResponseData<TPayment>;
    };
}

export type { BillApiProps };
