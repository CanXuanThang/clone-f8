import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import avatar from '../../../../../../public/avatar.jpg';
import { useSelector } from 'react-redux';
import { AppState } from '@src/modules/module-global/redux';
import Cookies from 'js-cookie';
import { accessToken } from '@src/modules/module-base/constants';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCourseByUser } from '@src/modules/module-global/api/Course';
import { useEffect, useState } from 'react';
import { DataRegister, TCourseTypeUser } from '@src/modules/module-global/models/apis';
import { getCurrentUserApi } from '@src/modules/module-global/api/Auth';
import CircularBase from '@src/modules/module-base/components/CircularBase';
import CourseForUser from './CourseForUser';
import DialogUpdateInfo from './DialogUpdateInfo';

function User() {
    const [open, setOpen] = useState<boolean>(false);
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
        <Box
            sx={{
                minHeight: '650px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mx: { lg: '21%', md: '12%', sm: '5%', xs: 0 },
            }}>
            <CircularBase isLoading={getCurrentUser.isLoading || mutation.isLoading} />
            <Box
                sx={{
                    backgroundImage: `url("../../../../../../public/banner-user.png")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                    width: '100%',
                    height: '300px',
                    position: 'relative',
                }}>
                <Box sx={{ position: 'absolute', bottom: '-84px', left: '44px', display: 'flex', alignItems: 'end' }}>
                    <Avatar alt="Remy Sharp" src={avatar} sx={{ width: '9em', height: '9em' }} />
                    {getCurrentUser.data?.data && (
                        <Typography variant="h5" ml={2}>
                            {getCurrentUser.data?.data.displayName}
                        </Typography>
                    )}
                </Box>
            </Box>
            <Grid pl="54px" mt={14} container item>
                <Grid xs={12} sm={12} md={5} item>
                    <Typography variant="h5">Thông tin cá nhân</Typography>
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
                    <Button
                        variant="contained"
                        sx={{ bgcolor: '#ff8f26', borderRadius: '99px', p: '9px 20px', mt: 2 }}
                        onClick={() => setOpen(true)}>
                        Thay đổi thông tin
                    </Button>
                </Grid>
                <Grid xs={12} sm={12} md={7} item>
                    {mutation.data?.content && mutation.data?.content.length !== 0 ? (
                        <>
                            <Typography variant="h5" mb={1}>
                                Các khóa học của bạn
                            </Typography>
                            {mutation.data?.content.map((data: TCourseTypeUser, index) => (
                                <Box sx={{ display: 'flex', mb: 2 }} key={index}>
                                    <CourseForUser item={data.course} />
                                    <Box ml={1} maxWidth="170px">
                                        <Typography variant="subtitle2">{data.course.name}</Typography>
                                        <Typography
                                            component="p"
                                            sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {data.course.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </>
                    ) : (
                        <Typography variant="h5">Chưa có khóa học nào</Typography>
                    )}
                </Grid>
            </Grid>
            <DialogUpdateInfo
                open={open}
                setOpen={setOpen}
                onRefesh={() => getCurrentUser.refetch().then()}
                data={getCurrentUser.data?.data}
            />
        </Box>
    );
}

export default User;
