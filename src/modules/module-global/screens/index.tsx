import { ErrorBoundary } from '@src/modules/module-error/components';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from './MainScreen';
import { SCREEN } from '../constants/screen';
import Cookies from 'js-cookie';
import { SCREEN_ADMIN } from '@src/modules/module-admin/constants';

const HomeScreen = React.lazy(() => import('./HomeScreen'));
const CourseScreen = React.lazy(() => import('./CourseScreen'));
const NotFoundScreen = React.lazy(() => import('./NotFoundScreen'));
const LearningScreen = React.lazy(() => import('./LearningScreen'));
const PaymentScreen = React.lazy(() => import('./PaymentScreen'));

// ----------admin-------------
const LoginAdminScreeen = React.lazy(() => import('@src/modules/module-admin/components/Login'));

function HomeRouter() {
    const role = Cookies.get('role');
    const renderRouter = ({ path, element, visible }: { path: string; element: React.ReactNode; visible?: boolean }) =>
        visible ? <Route path={path} element={element} /> : null;
    return (
        <React.Suspense fallback={null}>
            <Routes>
                {renderRouter({
                    path: SCREEN.HOME,
                    element: <HomeScreen />,
                    visible: true,
                })}
                {renderRouter({
                    path: SCREEN.ADVANCED_JAVASCRIPT.url,
                    element: <CourseScreen code={SCREEN.ADVANCED_JAVASCRIPT.id} />,
                    visible: true,
                })}
                {renderRouter({
                    path: SCREEN.BASIC_JAVASCRIPT.url,
                    element: <CourseScreen code={SCREEN.BASIC_JAVASCRIPT.id} />,
                    visible: true,
                })}
                {renderRouter({
                    path: SCREEN.LEARNING,
                    element: <LearningScreen />,
                    visible: role === 'ROLE_CUSTOMER',
                })}
                {renderRouter({
                    path: SCREEN.PAYMENT,
                    element: <PaymentScreen />,
                    visible: true,
                })}

                {/* router admin */}

                {renderRouter({
                    path: SCREEN_ADMIN.HOME_ADMIN,
                    element: <LoginAdminScreeen />,
                    visible: true,
                })}
                <Route path="*" element={<NotFoundScreen />} />
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
                        <Route path="*" element={<MainScreen element={<HomeRouter />} />} />
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </ErrorBoundary>
    );
}
