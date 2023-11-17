import { Box, Divider, Stack, Toolbar, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SearchComponent from './SearchComponent';
import Login from '../Login';
import { Link } from 'react-router-dom';
import { SCREEN } from '../../constants/screen';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function AppHeader() {
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
                <Box display="flex" alignItems="center">
                    <ShoppingCartIcon sx={{ color: '#ff8f26', cursor: 'pointer' }} />
                    <Login />
                </Box>
            </Toolbar>
            <Divider sx={{ borderWidth: '1px', borderStyle: 'revert-layer' }} />
        </Box>
    );
}

export default AppHeader;
