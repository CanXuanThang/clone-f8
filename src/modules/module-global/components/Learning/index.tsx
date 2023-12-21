import { Box, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import Comment from './Comment';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useMutation } from '@tanstack/react-query';
import { getCourseById, getCourseByUser } from '../../api/Course';
import { useParams } from 'react-router-dom';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Lesson } from '../../models/apis';
import CircularBase from '@src/modules/module-base/components/CircularBase';

function Learning() {
    const [open, setOpen] = useState(false);
    const [isCourse, setIsCourse] = useState<boolean>(false);
    const [data, setData] = useState<Lesson>();
    const param = useParams();

    const mutation = useMutation({
        mutationFn: getCourseByUser,
        onSuccess: (res) => {
            if (res) {
                res.content.map((item) => {
                    if (item.id === Number(param.courseId)) {
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
    });

    useEffect(() => {
        if (isCourse) {
            lessons.mutate({ data: { id: Number(param.courseId) } });
            setData(lessons.data?.data.lessons[0]);
        }
    }, [isCourse]);

    useEffect(() => {
        mutation.mutate({ data: { pageIndex: 1, pageSize: 10 } });
    }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <Box>
            <CircularBase isLoading={lessons.isLoading || mutation.isLoading} />
            {isCourse ? (
                <Box position="relative">
                    <Grid container>
                        <Grid item xs={open ? 9 : 12}>
                            <ReactPlayer
                                url={data?.embeddedLink}
                                controls={true}
                                width="100%"
                                height="550px"
                                // style={{ maxHeight: '550px' }}
                            />
                            <Box mx={8}>
                                <Typography variant="h3" mt={6}>
                                    {data?.name}
                                </Typography>
                                <Typography variant="caption" my={1} sx={{ display: 'block' }}>
                                    {data?.description}
                                </Typography>
                            </Box>
                            <Comment />
                        </Grid>
                        {open && (
                            <Grid item xs={3}>
                                {lessons.data?.data.lessons.map((item, index) => (
                                    <Box display="flex" alignItems="center" mb={2} key={index} onClick={() => setData(item)}>
                                        <PlayCircleIcon sx={{ color: 'rgba(240,81,35,.4)', mr: 1 }} />
                                        <Typography>
                                            {index + 1}. {item?.name}
                                        </Typography>
                                    </Box>
                                ))}
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
                        }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            sx={{ ...(open && { display: 'none' }) }}>
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
