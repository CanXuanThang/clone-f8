import { TIMING_API_PENDING } from '@src/modules/module-base/constants';
import { CourseApiProps } from '../models/apis/Course';
import { callApi } from '@src/modules/module-base/apis';
import { debounce } from '@src/modules/module-base/hooks';

const COURSE_API_PATH = Object.freeze({
    COURSE_ALL: '/public/course/all',
    COURSE_BY_ID: (id?: number) => `/public/course/${id}`,
    COURSE_ALL_BY_TYPE_BY_ID: (id?: number) => `/public/course/all-by-type/${id}`,
    COURSE_USER: '/user-course/get-page',
    COURSE_TYPE_ALL: '/public/course-type-all',
    EVALUATE: '/evaluate/save',
    COURSE_POPULAR: '/public/course/popular',
    RECOMMANDATION: (id: number) => `/public/course-suggest/${id}`,
    SEARCH_COURSE: '/course/get-page',
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

const getCourseAllByTypeByIdApi = async (
    payload: CourseApiProps['CourseAllByTypeById']['Payload']
): Promise<CourseApiProps['CourseAllByTypeById']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.COURSE_ALL_BY_TYPE_BY_ID(data.id),
        method: 'get',
    };
    const [{ response, error }] = await Promise.all([
        callApi<CourseApiProps['CourseAllByTypeById']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const getCourseByUser = async (
    payload: CourseApiProps['CourseUser']['Payload']
): Promise<CourseApiProps['CourseUser']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.COURSE_USER,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callApi<CourseApiProps['CourseUser']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const getCourseTypeAll = async (
    payload: CourseApiProps['CourseTypeAll']['Payload']
): Promise<CourseApiProps['CourseTypeAll']['Response']> => {
    const { timer = TIMING_API_PENDING } = payload;
    const options = {
        url: COURSE_API_PATH.COURSE_TYPE_ALL,
        method: 'get',
    };
    const [{ response, error }] = await Promise.all([
        callApi<CourseApiProps['CourseTypeAll']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const getCoursePopularApi = async (
    payload: CourseApiProps['CoursePopular']['Payload']
): Promise<CourseApiProps['CoursePopular']['Response']> => {
    const { timer = TIMING_API_PENDING } = payload;
    const options = {
        url: COURSE_API_PATH.COURSE_POPULAR,
        method: 'get',
    };
    const [{ response, error }] = await Promise.all([
        callApi<CourseApiProps['CoursePopular']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const setEvaluateApi = async (
    payload: CourseApiProps['Evaluate']['Payload']
): Promise<CourseApiProps['Evaluate']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.EVALUATE,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callApi<CourseApiProps['Evaluate']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const searchCourseApi = async (
    payload: CourseApiProps['SearchCourse']['Payload']
): Promise<CourseApiProps['SearchCourse']['Response']> => {
    const { timer = 1000, data } = payload;
    const options = {
        url: COURSE_API_PATH.SEARCH_COURSE,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callApi<CourseApiProps['SearchCourse']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const getRecommandationApi = async (
    payload: CourseApiProps['Recommandation']['Payload']
): Promise<CourseApiProps['Recommandation']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.RECOMMANDATION(data.id),
        method: 'get',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callApi<CourseApiProps['Recommandation']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

export {
    getCourseAll,
    getCourseById,
    getCourseByUser,
    getCourseTypeAll,
    setEvaluateApi,
    searchCourseApi,
    getCoursePopularApi,
    getCourseAllByTypeByIdApi,
    getRecommandationApi,
};
