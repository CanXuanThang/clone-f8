import { CallApiDebounse, CallApiResponse, CallApiResponseData } from '../type/AuthType';

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

type DataCourse = {
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
};

type CourseAll = {
    code: string;
    desc: string;
    data: DataCourse[];
};

type CourseByUser = {
    content: any;
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
    numberOfElements: number;
    first: boolean;
    empty: boolean;
};

type TCourseTypeAll = {
    id: number;
    code: string;
    name: string;
};

interface CourseApiProps {
    CourseAll: {
        Payload: CallApiDebounse;
        Response?: CallApiResponseData<CourseAll>;
    };
    CourseById: {
        Payload: CallApiDebounse & { data: { id?: number } };
        Response?: CallApiResponseData<DataCourse>;
    };
    CourseUser: {
        Payload: CallApiDebounse & { data: { pageIndex: number; pageSize: number } };
        Response?: CallApiResponse<CourseByUser>;
    };
    CourseTypeAll: {
        Payload: CallApiDebounse;
        Response?: CallApiResponseData<TCourseTypeAll[]>;
    };
}

export type { CourseApiProps, DataCourse };
