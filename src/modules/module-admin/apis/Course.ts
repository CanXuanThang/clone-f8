import { TIMING_API_PENDING } from '@src/modules/module-base/constants';
import { CourseAdminApiProps } from '../models/Course';
import { debounce } from '@src/modules/module-base/hooks';
import { callAdminApi } from '@src/modules/module-base/apis/apiAdmin';

const COURSE_API_PATH = Object.freeze({
    DELETE_COURSE_TYPE: `/course-type/update-status`,
    DELETE_COURSE: '/course/update-status',
    DELETE_LESSON: (id?: number) => `/lesson/${id}`,
    ADD_COURSE_TYPE: '/course-type/save',
    ADD_IMAGE: '/course/save-image',
    ADD_COURSE: '/course/save',
    ADD_LESSON: '/lesson/save',
});

const deleteCourseType = async (
    payload: CourseAdminApiProps['DeleteCourseType']['Payload']
): Promise<CourseAdminApiProps['DeleteCourseType']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.DELETE_COURSE_TYPE,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callAdminApi<CourseAdminApiProps['DeleteCourseType']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const deleteCourseApi = async (
    payload: CourseAdminApiProps['DeleteCourse']['Payload']
): Promise<CourseAdminApiProps['DeleteCourse']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.DELETE_COURSE,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callAdminApi<CourseAdminApiProps['DeleteCourse']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const deleteLessonApi = async (
    payload: CourseAdminApiProps['DeleteLesson']['Payload']
): Promise<CourseAdminApiProps['DeleteLesson']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.DELETE_LESSON(data.id),
        method: 'delete',
    };
    const [{ response, error }] = await Promise.all([
        callAdminApi<CourseAdminApiProps['DeleteLesson']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const addCourseType = async (
    payload: CourseAdminApiProps['CourseType']['Payload']
): Promise<CourseAdminApiProps['CourseType']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.ADD_COURSE_TYPE,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callAdminApi<CourseAdminApiProps['CourseType']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const addCourseApi = async (
    payload: CourseAdminApiProps['Course']['Payload']
): Promise<CourseAdminApiProps['Course']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.ADD_COURSE,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callAdminApi<CourseAdminApiProps['Course']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

const addImage = async (
    payload: CourseAdminApiProps['AddImage']['Payload']
): Promise<CourseAdminApiProps['AddImage']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.ADD_IMAGE,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callAdminApi<CourseAdminApiProps['AddImage']['Response']>(options, true),
        debounce(timer),
    ]);
    return error || response;
};

const addLessonApi = async (
    payload: CourseAdminApiProps['AddLesson']['Payload']
): Promise<CourseAdminApiProps['AddLesson']['Response']> => {
    const { timer = TIMING_API_PENDING, data } = payload;
    const options = {
        url: COURSE_API_PATH.ADD_LESSON,
        method: 'post',
        data,
    };
    const [{ response, error }] = await Promise.all([
        callAdminApi<CourseAdminApiProps['AddLesson']['Response']>(options),
        debounce(timer),
    ]);
    return error || response;
};

export { deleteCourseType, deleteCourseApi, addCourseType, addImage, addCourseApi, addLessonApi, deleteLessonApi };
