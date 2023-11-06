import { Box, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import PersonIcon from '@mui/icons-material/Person';
import FormLogin from './FormLogin';
import { useState } from 'react';
import FormRegister from './FormRegister';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    type: string;
    setType: (value: string) => void;
}

type TIconButton = {
    id: number;
    icon: JSX.Element;
    label: string;
};

const communicate: TIconButton[] = [
    {
        id: 1,
        icon: <PersonIcon sx={{ position: 'absolute', left: '24px' }} />,
        label: 'Sử dụng emai/ Số điện thoại',
    },
    {
        id: 2,
        icon: <GoogleIcon sx={{ position: 'absolute', left: '24px' }} />,
        label: 'Đăng nhập với Google',
    },
    {
        id: 3,
        icon: <FacebookIcon sx={{ position: 'absolute', left: '24px' }} />,
        label: 'Đăng nhập với Facebook',
    },
];

function DialogLogin({ open, setOpen, type, setType }: Props) {
    const [openForm, setOpenForm] = useState<boolean>(false);
    const handleOpenLogin = (id: number) => {
        id === 1 ? setOpenForm(true) : setOpenForm(false);
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
            <Box p="48px 16px">
                <DialogTitle textAlign="center" mt={4} variant="h4">
                    {openForm && (
                        <IconButton
                            sx={{ position: 'absolute', left: '56px', top: '10%', color: 'black' }}
                            onClick={() => setOpenForm(false)}>
                            <ArrowBackIosIcon />
                        </IconButton>
                    )}
                    <IconButton
                        sx={{ color: 'black', position: 'absolute', top: '12px', right: '2px' }}
                        onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                    <IconButton size="large" edge="start" aria-label="menu" sx={{ color: '#ff8f26' }}>
                        <AutoStoriesIcon />
                    </IconButton>
                    <br />
                    Đăng nhập
                    <Typography component="p" fontSize="13px" color="#f33a58" m="12px 60px">
                        Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử dụng chung có thể sẽ bị khóa.
                    </Typography>
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    {type === 'login' ? (
                        <>
                            {!openForm ? (
                                communicate.map((item: TIconButton) => (
                                    <IconButton
                                        key={item.label}
                                        sx={{
                                            border: '2px solid #ccc',
                                            borderRadius: '44px',
                                            width: '60%',
                                            mb: 2,
                                            color: 'black',
                                            p: '12px',
                                        }}
                                        onClick={() => handleOpenLogin(item.id)}>
                                        {item.icon}
                                        <Typography variant="body2">{item.label}</Typography>
                                    </IconButton>
                                ))
                            ) : (
                                <FormLogin />
                            )}
                            <Box sx={{ display: 'flex', my: '38px' }}>
                                <Typography variant="body2">Bạn chưa có tài khoản?</Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: '#f05123', pl: '4px', cursor: 'pointer' }}
                                    onClick={() => setType('register')}>
                                    Đăng ký
                                </Typography>
                            </Box>
                        </>
                    ) : (
                        <>
                            <FormRegister />
                            <Box sx={{ display: 'flex', my: '38px' }}>
                                <Typography variant="body2">Bạn đã có tài khoản?</Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: '#f05123', pl: '4px', cursor: 'pointer' }}
                                    onClick={() => setType('login')}>
                                    Đăng nhập
                                </Typography>
                            </Box>
                        </>
                    )}
                </DialogContent>
            </Box>
        </Dialog>
    );
}

export default DialogLogin;
