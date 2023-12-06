import React from 'react';

const Payment = React.lazy(() => import('../components/Payment'));

function PaymentScreen() {
    return (
        <React.Suspense fallback={null}>
            <Payment />
        </React.Suspense>
    );
}

export default PaymentScreen;
