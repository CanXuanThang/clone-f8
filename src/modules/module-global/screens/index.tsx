import { ErrorBoundary } from '@src/modules/module-error/components';
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MainScreen from './MainScreen';
import { SCREEN } from '../constants/screen';
import Cookies from 'js-cookie';
import { SCREEN_ADMIN } from '@src/modules/module-admin/constants';
import { accessToken } from '@src/modules/module-base/constants';

const HomeScreen = React.lazy(() => import('./HomeScreen'));
const CourseScreen = React.lazy(() => import('./CourseScreen'));
const NotFoundScreen = React.lazy(() => import('./NotFoundScreen'));
const LearningScreen = React.lazy(() => import('./LearningScreen'));
const PaymentScreen = React.lazy(() => import('./PaymentScreen'));
const UserScreen = React.lazy(() => import('./UserScreen'));

// ----------admin-------------
const LoginAdminScreeen = React.lazy(() => import('@src/modules/module-admin/components/Login'));
const CategoryAdminScreen = React.lazy(() => import('./CategoryAdminScreen'));
const CourseAdminScreen = React.lazy(() => import('./CourseAdminScreen'));
const BillAdminScreen = React.lazy(() => import('./BillAdminScreen'));
const TotalPriceAdminScreen = React.lazy(() => import('./TotalPriceAdminScreen'));
const AllUserAdminScreen = React.lazy(() => import('./AllUserAdminScreen'));

function HomeRouter() {
    const role = Cookies.get('role-admin');
    const isToken = Cookies.get(accessToken);
    const isTokenAdmin = Cookies.get('token-admin');
    const param = useLocation();

    const renderRouter = ({ path, element, visible }: { path: string; element: React.ReactNode; visible?: boolean }) =>
        visible ? (
            <Route path={path} element={element} />
        ) : param.pathname.includes('/admin') ? (
            <Route path={SCREEN_ADMIN.LOGIN_ADMIN} element={<LoginAdminScreeen />} />
        ) : null;
    return (
        <React.Suspense fallback={null}>
            <Routes>
                {renderRouter({
                    path: SCREEN.HOME,
                    element: <HomeScreen />,
                    visible: true,
                })}
                {renderRouter({
                    path: SCREEN.COURSE,
                    element: <CourseScreen />,
                    visible: true,
                })}
                {renderRouter({
                    path: SCREEN.LEARNING,
                    element: <LearningScreen />,
                    visible: !!isToken,
                })}
                {renderRouter({
                    path: SCREEN.PAYMENT,
                    element: <PaymentScreen />,
                    visible: !!isToken,
                })}
                {renderRouter({
                    path: SCREEN.USER,
                    element: <UserScreen />,
                    visible: !!isToken,
                })}

                {/* router admin */}

                {renderRouter({
                    path: SCREEN_ADMIN.LOGIN_ADMIN,
                    element: <LoginAdminScreeen />,
                    visible: true,
                })}
                {renderRouter({
                    path: SCREEN_ADMIN.CATEGORY_ADMIN,
                    element: <CategoryAdminScreen />,
                    visible: role === 'ROLE_ADMIN' && !!isTokenAdmin,
                })}
                {renderRouter({
                    path: SCREEN_ADMIN.ALL_USER,
                    element: <AllUserAdminScreen />,
                    visible: role === 'ROLE_ADMIN' && !!isTokenAdmin,
                })}
                {renderRouter({
                    path: `${SCREEN_ADMIN.COURSES}/*`,
                    element: <CourseAdminScreen />,
                    visible: role === 'ROLE_ADMIN' && !!isTokenAdmin,
                })}
                {renderRouter({
                    path: `${SCREEN_ADMIN.BILL}/*`,
                    element: <BillAdminScreen />,
                    visible: role === 'ROLE_ADMIN' && !!isTokenAdmin,
                })}
                {renderRouter({
                    path: `${SCREEN_ADMIN.TOTAL_PRICE}/*`,
                    element: <TotalPriceAdminScreen />,
                    visible: role === 'ROLE_ADMIN' && !!isTokenAdmin,
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
