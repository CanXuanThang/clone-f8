import { CallApiDebounse, CallApiResponse, CallApiResponseData } from '../type/AuthType';
import { DataRegister } from './Auth';

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
    rating: number;
    evaluates: Evaluate[];
    courseIndex: number;
};

type CourseAll = {
    code: string;
    desc: string;
    data: DataCourse[];
};

type TCourseTypeUser = {
    active: true;
    buyUser: DataRegister;
    course: DataCourse;
};

type CourseByUser = {
    content: TCourseTypeUser[];
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

type TSearchCorse = {
    content: DataCourse[];
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

type Evaluate = {
    id: number;
    numberStar: number;
    content: string;
    buyer: any;
    courseId: any;
};

interface CourseApiProps {
    CourseAll: {
        Payload: CallApiDebounse;
        Response?: CallApiResponseData<CourseAll>;
    };
    CoursePopular: {
        Payload: CallApiDebounse;
        Response?: CallApiResponseData<DataCourse[]>;
    };
    CourseById: {
        Payload: CallApiDebounse & { data: { id?: number } };
        Response?: CallApiResponseData<DataCourse>;
    };
    CourseAllByTypeById: {
        Payload: CallApiDebounse & { data: { id?: number } };
        Response?: CallApiResponseData<DataCourse[]>;
    };
    CourseUser: {
        Payload: CallApiDebounse & { data: { pageIndex: number; pageSize: number } };
        Response?: CourseByUser;
    };
    CourseTypeAll: {
        Payload: CallApiDebounse;
        Response?: CallApiResponseData<TCourseTypeAll[]>;
    };
    SearchCourse: {
        Payload: CallApiDebounse & {
            data: { pageIndex: number; pageSize: number; textSearch?: string; courseTypeId?: number };
        };
        Response?: TSearchCorse;
    };
    Evaluate: {
        Payload: CallApiDebounse & {
            data: {
                courseId: number;
                numberStar?: number;
                content?: string;
            };
        };
        Response?: CallApiResponseData<Evaluate>;
    };
    Recommandation: {
        Payload: CallApiDebounse & { data: { id: number } };
        Response?: CallApiResponseData<DataCourse[]>;
    };
}

export type { CourseApiProps, DataCourse, Lesson, TCourseTypeUser };
