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
        onSuccess: (response) => {
            if (response?.status === 200) {
            }
        },
    });

    useEffect(() => {
        !!token && !!tokenCookie && mutation.mutate({ data: { pageIndex: 1, pageSize: 10 } });
    }, [token, tokenCookie]);

    useEffect(() => {
        refetch().then();
    }, []);

    return (
        <Box px={10} sx={{ md: { px: 0 } }} mb={8}>
            <CircularBase isLoading={isLoading} />
            <Box>
                <Typography variant="h5" sx={{ pt: 6, pb: 2 }}>
                    Khóa học Pro
                </Typography>
                <Grid container spacing={2}>
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
            <Box>
                {mutation.data?.data ? (
                    <>
                        <Typography variant="h5" sx={{ pt: 6, pb: 2 }}>
                            Khóa học của bạn
                        </Typography>

                        <Grid container spacing={2}>
                            {mutation.data?.data &&
                                mutation.data?.data.content.map((data: any) => (
                                    <Grid item xs={12} sm={6} md={3} key={data.id}>
                                        <CardBase item={data} disable={true} />
                                    </Grid>
                                ))}
                        </Grid>
                    </>
                ) : null}
            </Box>
        </Box>
    );
}

export default BodyComponent;
