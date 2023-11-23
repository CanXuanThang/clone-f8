import React from 'react';

const Card = React.lazy(() => import('../components/Cart'));

function CardScreen() {
    return (
        <React.Suspense fallback={null}>
            <Card />
        </React.Suspense>
    );
}

export default CardScreen;
