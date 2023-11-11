import React from 'react';

const Learning = React.lazy(() => import('../components/Learning'));

function LearningScreen() {
    return (
        <React.Suspense fallback={false}>
            <Learning />
        </React.Suspense>
    );
}

export default LearningScreen;
