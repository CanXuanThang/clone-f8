import { Box, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FormLogin from './FormLogin';
import { useState } from 'react';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
}

function Login() {
    const [open, setOpen] = useState<boolean>(true);
    const [openForm, setOpenForm] = useState<boolean>(true);

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
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    <FormLogin setOpen={setOpen} />
                </DialogContent>
            </Box>
        </Dialog>
    );
}

export default Login;
