import React from 'react';

const User = React.lazy(() => import('@src/modules/module-admin/components/User'));

function AllUserAdminScreen() {
    return (
        <React.Suspense fallback={null}>
            <User />
        </React.Suspense>
    );
}

export default AllUserAdminScreen;
