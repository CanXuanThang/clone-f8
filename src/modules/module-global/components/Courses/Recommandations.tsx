import { Box, Grid, Typography } from '@mui/material';
import { DataCourse } from '../../models/apis';
import CardBase from '@src/modules/module-base/components/CardBase';
import { useQuery } from '@tanstack/react-query';
import { getRecommandationApi } from '../../api/Course';
import { useEffect } from 'react';

interface Props {
    id: number;
}

function Recommandations({ id }: Props) {
    const { data, refetch } = useQuery({
        queryKey: ['RECOMMANDATION'],
        queryFn: () => getRecommandationApi({ data: { id: id } }),
    });

    useEffect(() => {
        refetch().then();
    }, [id]);
    return (
        <Box>
            {data?.data.length !== 0 ? (
                <>
                    <Typography variant="h5" sx={{ pt: 6, pb: 2 }}>
                        Các khóa học liên quan
                    </Typography>
                    <Grid container spacing={2}>
                        {data?.data.map((data: DataCourse, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <CardBase item={data} isHome={false} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            ) : null}
        </Box>
    );
}

export default Recommandations;
