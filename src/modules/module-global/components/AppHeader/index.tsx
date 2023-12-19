import {
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SearchComponent from './SearchComponent';
import { Link } from 'react-router-dom';
import { SCREEN } from '../../constants/screen';
import React from 'react';
import { Logout } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../redux/selector';
import { AppState } from '../../redux';
import Login from '../Auth/Login';
import ChangePassword from '../Auth/ChangePassword';
import Cookies from 'js-cookie';
import { accessToken, username } from '@src/modules/module-base/constants';

function AppHeader() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isToken = useSelector((state: AppState) => state.profile.token);
    const dispatch = useDispatch();

    const token = Cookies.get(accessToken);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ position: 'fixed', zIndex: 999, width: '100%', background: '#fff' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Stack flexDirection="row" alignItems="center" sx={{ display: { md: 'flex', xs: 'none' } }}>
                    <Link to={SCREEN.HOME}>
                        <AutoStoriesIcon sx={{ mr: 2, color: '#ff8f26' }} />
                    </Link>
                    <Typography variant="body1" sx={{ flexGrow: 1 }} color="grey.1100">
                        Học lập trình để đi làm
                    </Typography>
                </Stack>
                <SearchComponent />
                {!!isToken || !!token ? (
                    <Box display="flex" alignItems="center">
                        <Button sx={{ color: '#333', fontWeight: 600, fontSize: '14px' }}>Khóa học của tôi</Button>
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
                                    Logout
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Box>
                ) : (
                    <Box display="flex" alignItems="center">
                        <Login />
                    </Box>
                )}
            </Toolbar>
            <Divider sx={{ borderWidth: '1px', borderStyle: 'revert-layer' }} />
        </Box>
    );
}

export default AppHeader;
