import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SCREEN_ADMIN } from '../../constants';
import { useNavigate } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import CategoryIcon from '@mui/icons-material/Category';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import HistoryIcon from '@mui/icons-material/History';
import { useDispatch } from 'react-redux';
import { setToken } from '@src/modules/module-global/redux/selector';
import Cookies from 'js-cookie';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    backgroundColor: '#fff',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const listItem = [
    {
        name: 'Danh mục',
        url: SCREEN_ADMIN.CATEGORY_ADMIN,
        icon: <CategoryIcon />,
    },
    {
        name: 'Danh sách người dùng',
        url: SCREEN_ADMIN.ALL_USER,
        icon: <AccountCircleIcon />,
    },
    {
        name: 'Danh sách khóa học',
        url: SCREEN_ADMIN.COURSES,
        icon: <ListIcon />,
    },
    {
        name: 'Danh sách đăng ký khóa học',
        url: SCREEN_ADMIN.BILL,
        icon: <LocalAtmIcon />,
    },
    {
        name: 'Tổng tiền hóa đơn',
        url: SCREEN_ADMIN.TOTAL_PRICE,
        icon: <MonetizationOnIcon />,
    },
];

export default function SideBar({ element }: { element: React.ReactNode }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ color: 'black', mr: 2, ...(open && { display: 'none' }) }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon sx={{ color: 'black' }} />
                        ) : (
                            <ChevronRightIcon sx={{ color: 'black' }} />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%' }}>
                    <Box>
                        {listItem.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton onClick={() => navigate(item.url, { replace: true })}>
                                    <ListItemIcon sx={{ svg: { color: 'black' } }}>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Box>
                    <ListItem sx={{ mb: 4, pl: 8 }}>
                        <ListItemButton
                            color="red"
                            onClick={() => {
                                dispatch(setToken('logout', ''));
                                Cookies.remove('role-admin');
                                Cookies.remove('token-admin');
                                window.location.reload();
                            }}>
                            <ListItemIcon sx={{ svg: { color: 'red' } }}>
                                <HistoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Đăng xuất" sx={{ color: 'red' }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Main open={open} sx={{ mr: 6 }}>
                {element}
            </Main>
        </Box>
    );
}
