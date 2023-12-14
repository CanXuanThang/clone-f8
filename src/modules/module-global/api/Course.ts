import { TIMING_API_PENDING } from '@src/modules/module-base/constants';
import { CourseApiProps } from '../models/apis/Course';
import { callApi } from '@src/modules/module-base/apis';
import { debounce } from '@src/modules/module-base/hooks';

const COURSE_API_PATH = Object.freeze({
    COURSE_ALL: '/public/course/all',
    COURSE_BY_ID: (id?: number) => `/public/course/${id}`,
});

const getCourseAll = async (
    payload: CourseApiProps['CourseAll']['Payload']
): Promise<CourseApiProps['CourseAll']['Response']> => {
    const { timer = TIMING_API_PENDING } = payload;
    const options = {
        url: COURSE_API_PATH.COURSE_ALL,
        method: 'get',
    };
    const [{ response, error }] = await Promise.all([
        callApi<CourseApiProps['CourseAll']['Response']>(options, true),
        debounce(timer),
    ]);
    return error || response;
};

const getCourseById = async (
    payload: CourseApiProps['CourseById']['Payload']
): Promise<CourseApiProps['CourseById']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.COURSE_BY_ID(data.id),
        method: 'get',
    };
    const [{ response, error }] = await Promise.all([
        callApi<CourseApiProps['CourseById']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

export { getCourseAll, getCourseById };
