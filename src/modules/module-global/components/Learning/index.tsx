import { Box, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import Comment from './Comment';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useLayoutEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useMutation } from '@tanstack/react-query';
import { getCourseById, getCourseByUser } from '../../api/Course';
import { useParams } from 'react-router-dom';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Lesson } from '../../models/apis';
import CircularBase from '@src/modules/module-base/components/CircularBase';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RatingElm from './RatingElm';

function Learning() {
    const [open, setOpen] = useState(true);
    const [isCourse, setIsCourse] = useState<boolean>(false);
    const param = useParams();
    const [data, setData] = useState<Lesson>();

    const mutation = useMutation({
        mutationFn: getCourseByUser,
        onSuccess: (res) => {
            if (res) {
                res.content.map((item) => {
                    if (item.course.id === Number(param.courseId)) {
                        return setIsCourse(true);
                    }
                });
            } else {
                setIsCourse(false);
            }
        },
    });
    const lessons = useMutation({
        mutationFn: getCourseById,
        onSuccess: (res) => {
            if (res?.code === '200') {
            }
        },
    });

    useEffect(() => {
        if (isCourse) {
            lessons.mutate({ data: { id: Number(param.courseId) } });
        }
    }, [isCourse]);

    useLayoutEffect(() => {
        lessons.data && setData(lessons.data?.data.lessons[0]);
    }, [lessons.data]);

    useEffect(() => {
        mutation.mutate({ data: { pageIndex: 1, pageSize: 10 } });
    }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <Box>
            <CircularBase isLoading={lessons.isLoading} />
            {isCourse ? (
                <Box position="relative">
                    <Grid container>
                        <Grid item xs={open ? 9 : 12}>
                            <ReactPlayer url={data?.embeddedLink} controls={true} width="100%" height="550px" />
                            <Box mx={8}>
                                <Typography variant="h3" mt={6}>
                                    {data?.name}
                                </Typography>
                                <Typography variant="caption" my={1} sx={{ display: 'block' }}>
                                    {data?.description}
                                </Typography>
                            </Box>
                            <Comment />
                            <RatingElm
                                data={lessons.data?.data}
                                onRefetch={() => lessons.mutate({ data: { id: Number(param.courseId) } })}
                            />
                        </Grid>
                        {open && (
                            <Grid item xs={3}>
                                <Box sx={{ height: '100%', bgcolor: '#f0f0f0', pt: 2 }}>
                                    {lessons.data?.data.lessons.map((item, index) => (
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            sx={{ cursor: 'pointer', '&:hover': { opacity: 0.7 } }}
                                            mb={2}
                                            key={index}
                                            onClick={() => setData(item)}>
                                            <PlayCircleIcon sx={{ color: 'rgba(240,81,35,.4)', mr: 1 }} />
                                            <Typography>
                                                {index + 1}. {item?.name}
                                            </Typography>
                                        </Box>
                                    ))}
                                    <IconButton
                                        onClick={() => setOpen(false)}
                                        sx={{ color: 'black', alignItems: 'end', position: 'fixed', bottom: '12px' }}>
                                        <ChevronRightIcon />
                                    </IconButton>
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                    <Toolbar
                        sx={{
                            position: 'fixed',
                            bgcolor: '#f0f0f0',
                            bottom: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            width: '100%',
                            ...(open && { display: 'none' }),
                        }}>
                        <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Box>
            ) : (
                <Typography
                    variant="h4"
                    sx={{
                        display: 'flex',
                        height: '66vh',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    Bạn chưa đăng ký khóa học này
                </Typography>
            )}
        </Box>
    );
}

export default Learning;
