import { DataCourse } from '@src/modules/module-global/models/apis/Course';
import { CallApiDebounse, CallApiResponseData } from '@src/modules/module-global/models/type/AuthType';

type TCourseType = {
    id: number;
    code: string;
    name: string;
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

interface CourseAdminApiProps {
    CourseType: {
        Payload: CallApiDebounse & { data: { id?: TCourseType['id']; code: TCourseType['code']; name: TCourseType['name'] } };
        Response?: CallApiResponseData<TCourseType>;
    };
    Course: {
        Payload: CallApiDebounse & {
            data: {
                id?: DataCourse['id'];
                code: DataCourse['code'];
                name: DataCourse['name'];
                shortDescription: DataCourse['shortDescription'];
                description: DataCourse['description'];
                price: DataCourse['price'];
                discount: DataCourse['discount'];
                courseType: { id: DataCourse['id'] };
                status: number;
            };
        };
        Response?: CallApiResponseData<DataCourse>;
    };
    DeleteCourseType: {
        Payload: CallApiDebounse & { data: { id: TCourseType['id']; status: number } };
        Response?: CallApiResponseData<null>;
    };
    DeleteCourse: {
        Payload: CallApiDebounse & { data: { id: TCourseType['id']; status: number } };
        Response?: CallApiResponseData<null>;
    };
    DeleteLesson: {
        Payload: CallApiDebounse & { data: { id: Lesson['id'] } };
        Response?: CallApiResponseData<null>;
    };
    AddImage: {
        Payload: CallApiDebounse & { data: { id: number; image: any } };
        Response?: CallApiResponseData<any>;
    };
    AddLesson: {
        Payload: CallApiDebounse & {
            data: {
                code: DataCourse['code'];
                name: DataCourse['name'];
                description: DataCourse['description'];
                course?: { id: DataCourse['id'] };
                embeddedLink: string;
            };
        };
        Response?: CallApiResponseData<any>;
    };
}

export type { CourseAdminApiProps };
