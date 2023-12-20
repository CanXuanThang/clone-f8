import { SCREEN_ADMIN } from '@src/modules/module-admin/constants';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const CourseAdmin = React.lazy(() => import('@src/modules/module-admin/components/Course'));
const LessonsAdmin = React.lazy(() => import('@src/modules/module-admin/components/Lessons'));

function CourseAdminScreen() {
    return (
        <React.Suspense fallback={null}>
            <Routes>
                <Route index element={<CourseAdmin />} />
                <Route path={`${SCREEN_ADMIN.LESSONS.slice(SCREEN_ADMIN.COURSES.length)}`} element={<LessonsAdmin />} />
            </Routes>
        </React.Suspense>
    );
}

export default CourseAdminScreen;
