import React from 'react';

const TotalPrice = React.lazy(() => import('@src/modules/module-admin/components/TotalPrice'));

function TotalPriceAdminScreen() {
    return (
        <React.Suspense fallback={null}>
            <TotalPrice />
        </React.Suspense>
    );
}

export default TotalPriceAdminScreen;
