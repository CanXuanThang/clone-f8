import { Avatar, Box, Grid, Typography } from '@mui/material';
import avatar from '../../../../../../public/avatar.jpg';
import CardBase from '@src/modules/module-base/components/CardBase';
import { useSelector } from 'react-redux';
import { AppState } from '@src/modules/module-global/redux';
import Cookies from 'js-cookie';
import { accessToken } from '@src/modules/module-base/constants';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCourseByUser } from '@src/modules/module-global/api/Course';
import { useEffect } from 'react';
import { TCourseTypeUser } from '@src/modules/module-global/models/apis';
import { getCurrentUserApi } from '@src/modules/module-global/api/Auth';
import CircularBase from '@src/modules/module-base/components/CircularBase';

function User() {
    const token = useSelector((state: AppState) => state.profile.token);
    const tokenCookie = Cookies.get(accessToken);
    const mutation = useMutation({
        mutationFn: getCourseByUser,
    });

    const getCurrentUser = useQuery({
        queryKey: ['getCurrentUser'],
        queryFn: () => getCurrentUserApi({}),
        enabled: false,
    });

    useEffect(() => {
        (!!token || !!tokenCookie) && mutation.mutate({ data: { pageIndex: 1, pageSize: 40 } });
    }, [token, tokenCookie]);

    useEffect(() => {
        getCurrentUser.refetch().then();
    }, []);

    return (
        <>
            <CircularBase isLoading={getCurrentUser.isLoading || mutation.isLoading} />
            <Grid m={5} container item>
                <Grid xs={6} item>
                    <Avatar alt="Remy Sharp" src={avatar} sx={{ width: '9em', height: '9em' }} />
                    {getCurrentUser.data?.data && (
                        <Box display="flex" flexDirection="row" my={1}>
                            <Typography>Họ và tên :</Typography>
                            <Typography sx={{ pl: 1 }}>{getCurrentUser.data?.data.displayName}</Typography>
                        </Box>
                    )}
                    {getCurrentUser.data?.data && (
                        <Box display="flex" flexDirection="row" my={1}>
                            <Typography>Email :</Typography>
                            <Typography sx={{ pl: 1 }}>{getCurrentUser.data?.data.email}</Typography>
                        </Box>
                    )}
                    {getCurrentUser.data?.data && (
                        <Box display="flex" flexDirection="row" my={1}>
                            <Typography>Số điện thoại :</Typography>
                            <Typography sx={{ pl: 1 }}>{getCurrentUser.data?.data.phoneNumber}</Typography>
                        </Box>
                    )}
                </Grid>
                <Grid xs={6} item>
                    {mutation.data?.content && mutation.data?.content.length !== 0 ? (
                        <>
                            <Typography variant="h5">Các khóa học của bạn</Typography>
                            {mutation.data?.content.map((data: TCourseTypeUser, index) => (
                                <Box sx={{ maxWidth: '303px' }} key={index}>
                                    <CardBase item={data.course} disable={true} isStar={false} isHome={false} />
                                </Box>
                            ))}
                        </>
                    ) : (
                        <Typography variant="h5">Chưa có khóa học nào</Typography>
                    )}
                </Grid>
            </Grid>
        </>
    );
}

export default User;
