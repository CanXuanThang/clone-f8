import { Box } from '@mui/material';

function NotFoundScreen() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                img: {
                    objectFit: 'cover',
                    width: '60%',
                    height: '60%',
                },
            }}>
            {/* <img src={Cover} alt="" /> */}
        </Box>
    );
}

export default NotFoundScreen;
