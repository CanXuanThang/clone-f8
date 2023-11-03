import { ErrorBoundary } from '@src/modules/module-error/components';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomeScreen = React.lazy(() => import('../components/HomeScreen'));

function HomeRouter() {
    const renderRouter = ({ path, element, visible }: { path: string; element: React.ReactNode; visible?: boolean }) =>
        visible ? <Route path={path} element={element} /> : null;

    return (
        <React.Suspense fallback={null}>
            <Routes>
                {renderRouter({
                    path: '',
                    element: <HomeScreen />,
                    visible: true,
                })}
            </Routes>
        </React.Suspense>
    );
}

export default function AppRouter() {
    return (
        <ErrorBoundary isAutoReload>
            <BrowserRouter>
                <React.Suspense fallback={null}>
                    <Routes>
                        <Route path="*" element={<HomeRouter />} />
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </ErrorBoundary>
    );
}
