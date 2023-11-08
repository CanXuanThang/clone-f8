import React from 'react';

const Home = React.lazy(() => import('../components/Home'));

function HomeScreen() {
    return (
        <React.Suspense fallback={null}>
            <Home />
        </React.Suspense>
    );
}

export default HomeScreen;
