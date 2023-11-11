import { ErrorBoundary } from '@src/modules/module-error/components';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainAdminScreen from './MainAdminScreen';
import AppRouter from '@src/modules/module-global/screens';
import { SCREEN_ADMIN } from '../constants';

const HomeAdminScreen = React.lazy(() => import('./HomeAdminScreen'));

function HomeAdminRouter() {
    const renderRouter = ({ path, element, visible }: { path: string; element: React.ReactNode; visible?: boolean }) =>
        visible ? <Route path={path} element={element} /> : null;

    return (
        <React.Suspense fallback={null}>
            <Routes>
                {renderRouter({
                    path: SCREEN_ADMIN.HOME_ADMIN,
                    element: <HomeAdminScreen />,
                    visible: true,
                })}
            </Routes>
        </React.Suspense>
    );
}

export default function AdminRouter() {
    const roleAdmin = 1;
    return (
        <ErrorBoundary isAutoReload>
            <BrowserRouter>
                <React.Suspense fallback={null}>
                    <Routes>
                        <Route
                            path="*"
                            element={<MainAdminScreen element={roleAdmin === 1 ? <HomeAdminRouter /> : <AppRouter />} />}
                        />
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </ErrorBoundary>
    );
}
