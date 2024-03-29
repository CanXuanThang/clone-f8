import { Grid, Typography } from '@mui/material';
import CardBase from '@src/modules/module-base/components/CardBase';
import CircularBase from '@src/modules/module-base/components/CircularBase';
import { getCourseAllByTypeByIdApi } from '@src/modules/module-global/api/Course';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';

interface Props {
    id: number;
}

function CourseAllByType({ id }: Props) {
    const getCourseAllByTypeById = useMutation({
        mutationFn: getCourseAllByTypeByIdApi,
    });
    useEffect(() => {
        getCourseAllByTypeById.mutate({ data: { id: id } });
    }, [id]);
    return (
        <>
            <CircularBase isLoading={getCourseAllByTypeById.isLoading} />
            <Grid container spacing={3}>
                {getCourseAllByTypeById.data?.data ? (
                    getCourseAllByTypeById.data.data.map(
                        (item, index) =>
                            index < 8 && (
                                <Grid item xs={12} sm={6} md={3} key={item.id}>
                                    <CardBase item={item} />
                                </Grid>
                            )
                    )
                ) : (
                    <Typography>Chưa có khóa học nào</Typography>
                )}
            </Grid>
        </>
    );
}

export default CourseAllByType;
