import { Grid, Typography } from '@mui/material';
import CardBase from '@src/modules/module-base/components/CardBase';
import { getCourseAllByTypeByIdApi, searchCourseApi } from '@src/modules/module-global/api/Course';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';

interface Props {
    id: number;
}

function CourseAllByType({ id }: Props) {
    const getCourseAllByTypeById = useMutation({
        mutationFn: searchCourseApi,
    });
    useEffect(() => {
        getCourseAllByTypeById.mutate({ data: { courseTypeId: id, pageIndex: 1, pageSize: 8 } });
    }, [id]);
    return (
        <Grid container spacing={3}>
            {getCourseAllByTypeById.data?.content ? (
                getCourseAllByTypeById.data.content.map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item.id}>
                        <CardBase item={item} />
                    </Grid>
                ))
            ) : (
                <Typography>Chưa có khóa học nào</Typography>
            )}
        </Grid>
    );
}

export default CourseAllByType;
