import { CallApiDebounse, CallApiResponseData } from '@src/modules/module-global/models/type/AuthType';

type TCourseType = {
    id: number;
    code: string;
    name: string;
};

interface CourseAdminApiProps {
    CourseType: {
        Payload: CallApiDebounse & { data: { code: TCourseType['code']; name: TCourseType['name'] } };
        Response?: CallApiResponseData<TCourseType>;
    };
    DeleteCourseType: {
        Payload: CallApiDebounse & { data: { id: TCourseType['id'] } };
        Response?: CallApiResponseData<null>;
    };
    DeleteCourse: {
        Payload: CallApiDebounse & { data: { id: TCourseType['id'] } };
        Response?: CallApiResponseData<null>;
    };
    AddImage: {
        Payload: CallApiDebounse & { data: { id: number; image: any } };
        Response?: CallApiResponseData<null>;
    };
}

export type { CourseAdminApiProps };
