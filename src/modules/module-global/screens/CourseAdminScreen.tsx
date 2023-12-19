import React from 'react';

const CourseAdmin = React.lazy(() => import('@src/modules/module-admin/components/Course'));

function CourseAdminScreen() {
    return (
        <React.Suspense fallback={null}>
            <CourseAdmin />
        </React.Suspense>
    );
}

export default CourseAdminScreen;
