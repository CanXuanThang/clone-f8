import { Box, Button } from '@mui/material';
import DialogLogin from './DialogLogin';
import { useState } from 'react';

function Login() {
    const [openLogin, setOpenLogin] = useState<boolean>(false);

    return (
        <>
            <Box>
                <Button color="inherit" onClick={() => setOpenLogin(!openLogin)}>
                    Đăng nhập
                </Button>
                <Button variant="contained" sx={{ bgcolor: '#ff8f26', borderRadius: '99px', p: '9px 20px' }}>
                    Đăng ký
                </Button>
            </Box>
            <DialogLogin open={openLogin} setOpen={setOpenLogin} />
        </>
    );
}

export default Login;
