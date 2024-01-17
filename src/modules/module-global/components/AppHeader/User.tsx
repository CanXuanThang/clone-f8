import { Avatar, Button, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import React, { ReactNode } from 'react';
import ChangePassword from '../Auth/ChangePassword';
import { setToken } from '../../redux/selector';
import Cookies from 'js-cookie';
import { username } from '@src/modules/module-base/constants';
import { Logout } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SCREEN } from '../../constants/screen';
import InfoIcon from '@mui/icons-material/Info';

function User() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                <MenuItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Button onClick={() => navigation(SCREEN.USER)}>
                        <ListItemIcon>
                            <InfoIcon fontSize="small" />
                        </ListItemIcon>
                        Thông tin cá nhân
                    </Button>
                    <ChangePassword />
                    <Button
                        onClick={() => {
                            dispatch(setToken('logout', ''));
                            Cookies.remove(username);
                            Cookies.remove('role');
                            window.location.reload();
                            handleClose();
                        }}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Đăng xuất
                    </Button>
                </MenuItem>
            </Menu>
        </>
    );
}

export default User;
