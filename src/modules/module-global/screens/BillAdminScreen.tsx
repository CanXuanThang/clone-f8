import React from 'react';

const Bill = React.lazy(() => import('@src/modules/module-admin/components/Bill'));

function CategoryAdmnScreen() {
    return (
        <React.Suspense fallback={null}>
            <Bill />
        </React.Suspense>
    );
}

export default CategoryAdmnScreen;
