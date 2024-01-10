import { Box, Grid, Typography } from '@mui/material';
import './BodyComponent.scss';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCourseAll, getCourseByUser } from '@src/modules/module-global/api/Course';
import { useEffect } from 'react';
import CircularBase from '@src/modules/module-base/components/CircularBase';
import { useSelector } from 'react-redux';
import { AppState } from '@src/modules/module-global/redux';
import Cookies from 'js-cookie';
import { accessToken } from '@src/modules/module-base/constants';
import CardBase from '@src/modules/module-base/components/CardBase';
import { DataCourse, TCourseTypeUser } from '@src/modules/module-global/models/apis';

function BodyComponent() {
    const token = useSelector((state: AppState) => state.profile.token);
    const tokenCookie = Cookies.get(accessToken);
    const { refetch, data, isLoading } = useQuery({
        queryKey: ['GET_COURSE_ALL'],
        queryFn: () => getCourseAll({}),
        enabled: false,
    });

    const mutation = useMutation({
        mutationFn: getCourseByUser,
    });

    useEffect(() => {
        (!!token || !!tokenCookie) && mutation.mutate({ data: { pageIndex: 1, pageSize: 10 } });
    }, [token, tokenCookie]);

    useEffect(() => {
        refetch().then();
    }, []);

    return (
        <Box px={10} sx={{ md: { px: 0 } }} mb={8}>
            <CircularBase isLoading={isLoading || mutation.isLoading} />
            <Box>
                {mutation?.data ? (
                    <>
                        <Typography variant="h5" sx={{ pt: 6, pb: 2 }}>
                            Khóa học của bạn
                        </Typography>

                        {mutation.data?.content.length !== 0 ? (
                            <Grid container spacing={2}>
                                {mutation.data?.content.map((data: TCourseTypeUser, index) => (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <CardBase item={data.course} disable={true} />
                                    </Grid>
                                ))}
                            </Grid>
                        ) : (
                            <Typography
                                variant="h5"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                }}>
                                Chưa có khóa học nào
                            </Typography>
                        )}
                    </>
                ) : null}
            </Box>
            <Box>
                <Typography variant="h5" sx={{ pt: 6, pb: 2 }}>
                    Khóa học Pro
                </Typography>
                <Grid container spacing={3}>
                    {data ? (
                        data?.data?.data.map((item) => (
                            <Grid item xs={12} sm={6} md={3} key={item.id}>
                                <CardBase item={item} />
                            </Grid>
                        ))
                    ) : (
                        <Typography>Chưa có khóa học nào</Typography>
                    )}
                </Grid>
            </Box>
        </Box>
    );
}

export default BodyComponent;
