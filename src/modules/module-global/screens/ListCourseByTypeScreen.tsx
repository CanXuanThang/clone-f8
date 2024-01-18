import React from 'react';

const ListCourseByType = React.lazy(() => import('../components/ListCourseByType'));

function ListCourseByTypeScreen() {
    return (
        <React.Suspense fallback={null}>
            <ListCourseByType />
        </React.Suspense>
    );
}

export default ListCourseByTypeScreen;
