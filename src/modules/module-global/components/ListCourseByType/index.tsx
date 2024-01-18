import { useMutation } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import { searchCourseApi } from '../../api/Course';
import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import CardBase from '@src/modules/module-base/components/CardBase';
import { Typography } from '@mui/material';
import CircularBase from '@src/modules/module-base/components/CircularBase';

function ListCourseByType() {
    const param = useParams();
    const mutation = useMutation({
        mutationFn: searchCourseApi,
    });
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        mutation.mutate({ data: { courseTypeId: Number(param.courseId), pageIndex: 1, pageSize: 40 } });
    }, [param.courseId]);
    return (
        <Box sx={{ minHeight: '550px', px: 10, pt: 8 }}>
            <CircularBase isLoading={mutation.isLoading} />
            <Typography variant="h5" sx={{ pb: 2 }}>
                {location.state}
            </Typography>
            {mutation.data?.content && mutation.data?.content.length !== 0 ? (
                <Grid container spacing={2}>
                    {mutation.data?.content.map((data, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <CardBase item={data} isHome={false} />
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
        </Box>
    );
}

export default ListCourseByType;
