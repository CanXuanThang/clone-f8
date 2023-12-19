import { Box } from '@mui/material';
import imgError from '@module-base/assets/404.jpg';

function NotFoundScreen() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '620px',
                img: {
                    objectFit: 'cover',
                    width: '60%',
                    height: '60%',
                },
            }}>
            <img src={imgError} alt="" />
        </Box>
    );
}

export default NotFoundScreen;
