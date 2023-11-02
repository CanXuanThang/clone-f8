import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomeScreen = React.lazy(() => import('../module-global/components/HomeScreen'));

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
        <BrowserRouter>
            <React.Suspense fallback={null}>
                <Routes>
                    <Route path="*" element={<HomeRouter />} />
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    );
}
