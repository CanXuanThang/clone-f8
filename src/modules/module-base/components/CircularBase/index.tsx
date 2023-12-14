import { Box, CircularProgress } from '@mui/material';

interface Props {
    isLoading: boolean;
}

function CircularBase({ isLoading }: Props) {
    return (
        isLoading && (
            <Box
                sx={{
                    zIndex: 999,
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(249, 248, 249, 0.5)',
                    left: 0,
                    top: 0,
                }}>
                <CircularProgress />
            </Box>
        )
    );
}

export default CircularBase;
