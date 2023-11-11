import { Box, Stack } from '@mui/material';

function MainAdminScreen({ element }: { element: React.ReactNode }) {
    return (
        <Stack>
            <Box>{element}</Box>
        </Stack>
    );
}

export default MainAdminScreen;
