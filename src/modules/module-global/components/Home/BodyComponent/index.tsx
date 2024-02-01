import { Box, Button, Grid, Typography } from '@mui/material';
import './BodyComponent.scss';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCourseByUser, getCourseTypeAll } from '@src/modules/module-global/api/Course';
import { useEffect } from 'react';
import CircularBase from '@src/modules/module-base/components/CircularBase';
import { useSelector } from 'react-redux';
import { AppState } from '@src/modules/module-global/redux';
import Cookies from 'js-cookie';
import { accessToken } from '@src/modules/module-base/constants';
import CardBase from '@src/modules/module-base/components/CardBase';
import { TCourseTypeUser } from '@src/modules/module-global/models/apis';
import CourseAllByType from './CourseAllByType';
import { useNavigate } from 'react-router-dom';
import { SCREEN } from '@src/modules/module-global/constants/screen';

function BodyComponent() {
    const navigation = useNavigate();
    const token = useSelector((state: AppState) => state.profile.token);
    const tokenCookie = Cookies.get(accessToken);

    const getCourseType = useQuery({
        queryKey: ['getCourseTypeAdmin'],
        queryFn: () => getCourseTypeAll({}),
        enabled: false,
    });

    const mutation = useMutation({
        mutationFn: getCourseByUser,
    });

    useEffect(() => {
        (!!token || !!tokenCookie) && mutation.mutate({ data: { pageIndex: 1, pageSize: 40 } });
    }, [token, tokenCookie]);

    useEffect(() => {
        getCourseType.refetch().then();
    }, []);

    return (
        <Box px={10} sx={{ md: { px: 0 } }} mb={8}>
            <CircularBase isLoading={mutation.isLoading} />
            <Box>
                {mutation?.data ? (
                    <>
                        <Typography variant="h5" sx={{ pt: 6, pb: 2 }}>
                            Khóa học của bạn
                        </Typography>

                        {mutation.data?.content && mutation.data?.content.length !== 0 ? (
                            <Grid container spacing={2}>
                                {mutation.data?.content.map((data: TCourseTypeUser, index) => (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <CardBase item={data.course} disable={true} isStar={false} />
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
                {getCourseType.data?.data.map((item) => (
                    <Box key={item.id}>
                        <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ pt: 6, pb: 2 }}>
                            <Typography variant="h5">{item.name}</Typography>
                            <Button
                                color="info"
                                onClick={() =>
                                    navigation(SCREEN.COURSE_BY_TYPE.replace('/:courseId', `/${item.id}`), {
                                        state: item.name,
                                    })
                                }>
                                Xem tất cả khóa học
                            </Button>
                        </Box>
                        <CourseAllByType id={item.id} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default BodyComponent;
