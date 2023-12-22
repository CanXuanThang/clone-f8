import { Box, Divider, Stack, Toolbar, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SearchComponent from './SearchComponent';
import { Link } from 'react-router-dom';
import { SCREEN } from '../../constants/screen';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux';
import Login from '../Auth/Login';
import Cookies from 'js-cookie';
import { accessToken } from '@src/modules/module-base/constants';
import NotifyBuyer from './NotifyBuyer';
import User from './User';
import { useMutation } from '@tanstack/react-query';
import { getBuyerApi } from '../../api/Bill';
import CircularBase from '@src/modules/module-base/components/CircularBase';

function AppHeader() {
    const isToken = useSelector((state: AppState) => state.profile.token);
    const token = Cookies.get(accessToken);

    const mutation = useMutation({
        mutationFn: getBuyerApi,
    });
    useEffect(() => {
        (!!isToken || !!token) && mutation.mutate({ data: { pageIndex: 1, pageSize: 10 } });
    }, [isToken, token]);

    return (
        <Box sx={{ position: 'fixed', zIndex: 999, width: '100%', background: '#fff' }}>
            <CircularBase isLoading={mutation.isLoading} />
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
                        <NotifyBuyer data={mutation.data} />
                        <User />
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
