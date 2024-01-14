import { DataCourse, DataRegister } from '@src/modules/module-global/models/apis';
import { CallApiDebounse, CallApiResponseData } from '@src/modules/module-global/models/type/AuthType';

type TAdminGet = {
    id: number;
    buyUser: DataRegister;
    course: DataCourse;
    totalBill: number;
    status: number;
};

type Lesson = {
    id: number;
    code: string;
    course: string | null;
    description: string;
    embeddedLink: string;
    image: string | null;
    indexOrder: number;
    name: string;
};

type Evaluate = {
    id: number;
    numberStar: number;
    content: string;
    buyer: any;
    courseId: any;
};

type TGetTotalBill = {
    course: {
        id: number;
        code: string;
        name: string;
        codeType: {
            id: number;
            code: string;
            name: string;
        };
        description: string;
        shortDescription: string;
        price: number;
        image: string;
        status: number;
        totalSearch: number | null;
        totalBuy: number;
        discount: number;
        priceDiscount: number;
        courseType: string | null;
        seller: any;
        lessons: Lesson[];
        rating: number;
        evaluates: Evaluate[];
    };
    countCourse: number;
    sumCourse: number;
    totalReport: number;
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

type Respone = {
    code: string;
    desc: string;
    data: TGetTotalBill[];
};

interface BillAdminApiProps {
    GetBill: {
        Payload: CallApiDebounse & { data: { pageIndex: number; pageSize: number } };
        Response?: TBill;
    };
    GetTotalBill: {
        Payload: CallApiDebounse & { data: { fromDate: any; toDate: any } };
        Response?: Respone;
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

export type { TBill, BillAdminApiProps, TAdminGet, TGetTotalBill };
