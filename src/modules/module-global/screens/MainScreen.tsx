import { Box, Stack } from '@mui/material';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

function MainScreen({ element }: { element: React.ReactNode }) {
    return (
        <Stack>
            <AppHeader />
            <Box mt={8}>
                {element}
                <AppFooter />
            </Box>
        </Stack>
    );
}

export default MainScreen;
