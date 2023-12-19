import { Box, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FormLogin from './FormLogin';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { accessToken } from '@src/modules/module-base/constants';
import { useNavigate } from 'react-router-dom';
import { SCREEN_ADMIN } from '../../constants';

function Login() {
    const [open, setOpen] = useState<boolean>(true);
    const navigate = useNavigate();

    const isToken = Cookies.get(accessToken);
    useEffect(() => {
        isToken ? navigate(SCREEN_ADMIN.DASHBOARD_ADMIN, { replace: true }) : null;
    }, [isToken]);

    return (
        <Dialog open={open} maxWidth="sm" fullWidth>
            <Box>
                <DialogTitle textAlign="center" mt={4} variant="h4">
                    <IconButton size="large" edge="start" aria-label="menu" sx={{ color: '#ff8f26' }}>
                        <AutoStoriesIcon />
                    </IconButton>
                    <br />
                    Đăng nhập
                </DialogTitle>
                <DialogContent
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', mb: 2 }}>
                    <FormLogin setOpen={setOpen} />
                </DialogContent>
            </Box>
        </Dialog>
    );
}

export default Login;
