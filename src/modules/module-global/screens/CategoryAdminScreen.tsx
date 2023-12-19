import React from 'react';

const Category = React.lazy(() => import('@src/modules/module-admin/components/Category'));

function CategoryAdmnScreen() {
    return (
        <React.Suspense fallback={null}>
            <Category />
        </React.Suspense>
    );
}

export default CategoryAdmnScreen;
