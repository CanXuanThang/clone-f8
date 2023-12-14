import { CallApiDebounse, CallApiResponse } from '../type/AuthType';

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

interface CourseApiProps {
    CourseAll: {
        Payload: CallApiDebounse;
        Response?: CallApiResponse<CourseAll>;
    };
    CourseById: {
        Payload: CallApiDebounse & { data: { id?: number } };
        Response?: CallApiResponse<DataCourse>;
    };
}

export type { CourseApiProps, DataCourse };
