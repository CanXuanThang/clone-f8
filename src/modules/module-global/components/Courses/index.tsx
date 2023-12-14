import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import Intro from './Intro';
import { useMutation } from '@tanstack/react-query';
import { getCourseById } from '../../api/Course';
import { useEffect } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CircularBase from '@src/modules/module-base/components/CircularBase';

interface Props {
    code?: number;
}

function Courses({ code }: Props) {
    const mutation = useMutation({
        mutationFn: getCourseById,
    });

    useEffect(() => {
        mutation.mutate({ data: { id: code } });
    }, [code]);

    return (
        <Box mt={4} mx={8} minHeight="100vh">
            <CircularBase isLoading={mutation.isLoading} />
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12} md={8} sx={{ order: { xs: 2, sm: 2, md: 1 } }}>
                    <Box>
                        <Typography variant="h3" my={3}>
                            {mutation.data?.data.name}
                        </Typography>
                        <Typography variant="caption" mt={1}>
                            {mutation.data?.data.description}
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Typography variant="h4" mt={3} mb={1}>
                                Nội dung khóa học
                            </Typography>
                        </Box>
                    </Box>
                    <Box mt={1}>
                        {mutation.data?.data.lessons.map((lesson, index) => (
                            <Box display="flex" alignItems="center" mb={2} key={index}>
                                <PlayCircleIcon sx={{ color: 'rgba(240,81,35,.4)', mr: 1 }} />
                                <Typography>
                                    {index + 1}. {lesson.name}{' '}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
                    <Intro data={mutation.data?.data} isLoading={mutation.isLoading} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Courses;
