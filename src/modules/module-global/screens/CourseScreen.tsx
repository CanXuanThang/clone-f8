import React from 'react';

const Courses = React.lazy(() => import('../components/Courses'));

interface Props {
    code?: number;
}

function CourseScreen({ code }: Props) {
    return (
        <React.Suspense fallback={null}>
            <Courses code={code} />
        </React.Suspense>
    );
}

export default CourseScreen;
