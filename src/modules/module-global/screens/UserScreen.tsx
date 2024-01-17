import React from 'react';

const User = React.lazy(() => import('../components/Auth/User'));

function UserScreen() {
    return (
        <React.Suspense fallback={null}>
            <User />
        </React.Suspense>
    );
}

export default UserScreen;
