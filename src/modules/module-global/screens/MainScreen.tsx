import { Box, Stack } from '@mui/material';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import { useLocation } from 'react-router-dom';

function MainScreen({ element }: { element: React.ReactNode }) {
    const param = useLocation();
    console.log();

    return (
        <Stack>
            {!param.pathname.includes('/admin') && <AppHeader />}
            <Box mt={8}>
                {element}
                {!param.pathname.includes('/admin') && <AppFooter />}
            </Box>
        </Stack>
    );
}

export default MainScreen;
