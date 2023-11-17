import { Box, Button } from '@mui/material';
import { useState } from 'react';
import DialogLogin from './DialogLogin';

function Login() {
    const [openLogin, setOpenLogin] = useState<boolean>(false);
    const [type, setType] = useState<string>('');

    return (
        <>
            <Box ml={2}>
                <Button
                    color="inherit"
                    onClick={() => {
                        setOpenLogin(!openLogin);
                        setType('login');
                    }}>
                    Đăng nhập
                </Button>
                <Button
                    variant="contained"
                    sx={{ bgcolor: '#ff8f26', borderRadius: '99px', p: '9px 20px' }}
                    onClick={() => {
                        setOpenLogin(!openLogin);
                        setType('register');
                    }}>
                    Đăng ký
                </Button>
            </Box>
            <DialogLogin open={openLogin} setOpen={setOpenLogin} type={type} setType={setType} />
        </>
    );
}

export default Login;
