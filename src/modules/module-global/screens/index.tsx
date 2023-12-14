import { ErrorBoundary } from '@src/modules/module-error/components';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from './MainScreen';
import { SCREEN } from '../constants/screen';

const HomeScreen = React.lazy(() => import('./HomeScreen'));
const CourseScreen = React.lazy(() => import('./CourseScreen'));
const NotFoundScreen = React.lazy(() => import('./NotFoundScreen'));
const LearningScreen = React.lazy(() => import('./LearningScreen'));
const PaymentScreen = React.lazy(() => import('./PaymentScreen'));

function HomeRouter() {
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
                    path: SCREEN.C,
                    element: <CourseScreen />,
                    visible: true,
                })}
                {renderRouter({
                    path: SCREEN.HTML_CSS_PRO,
                    element: <CourseScreen />,
                    visible: true,
                })}
                {renderRouter({
                    path: SCREEN.NODE_EXPRESSJS,
                    element: <CourseScreen />,
                    visible: true,
                })}
                {renderRouter({
                    path: SCREEN.LEARNING,
                    element: <LearningScreen />,
                    visible: true,
                })}
                {renderRouter({
                    path: SCREEN.PAYMENT,
                    element: <PaymentScreen />,
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
