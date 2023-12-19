import { Box, Stack } from '@mui/material';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { AppState } from '../redux';
import SideBar from '@src/modules/module-admin/components/SideBar';
import Login from '@src/modules/module-admin/components/Login';

function MainScreen({ element }: { element: React.ReactNode }) {
    const param = useLocation();
    const role = Cookies.get('role');
    const isRole = useSelector((state: AppState) => state.profile.auth);

    return (
        <Stack>
            {!param.pathname.includes('/admin') && <AppHeader />}
            <Box mt={8}>
                {param.pathname.includes('/admin') ? (
                    (isRole && isRole.roles[0] === 'ROLE_ADMIN') || role === 'ROLE_ADMIN' ? (
                        <SideBar element={element} />
                    ) : (
                        <Login />
                    )
                ) : (
                    element
                )}
                {!param.pathname.includes('/admin') && <AppFooter />}
            </Box>
        </Stack>
    );
}

export default MainScreen;
