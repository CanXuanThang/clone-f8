import React from 'react';

const Courses = React.lazy(() => import('../components/Courses'));

function CourseScreen() {
    return (
        <React.Suspense fallback={null}>
            <Courses />
        </React.Suspense>
    );
}

export default CourseScreen;
