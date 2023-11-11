import { Box, Grid, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import AccordionCourse from './AccordionCourse';
import Intro from './Intro';
import { Link } from 'react-router-dom';
import { SCREEN } from '../../constants/screen';

function Courses() {
    return (
        <Box mt={4} mx={8} minHeight="100vh">
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12} md={8} sx={{ order: { xs: 2, sm: 2, md: 1 } }}>
                    <Box>
                        <Typography variant="h3" my={3}>
                            Lập Trình JavaScript Cơ Bản
                        </Typography>
                        <Typography variant="caption" mt={1}>
                            Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập
                            thực hành sau mỗi bài học.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h4" my={2}>
                            Bạn sẽ học được gì?
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={6}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <DoneIcon sx={{ color: '#f05123', width: '18px' }} />
                                        </ListItemIcon>
                                        <Typography variant="caption">
                                            Hiểu chi tiết về các khái niệm cơ bản trong JS
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <DoneIcon sx={{ color: '#f05123', width: '18px' }} />
                                        </ListItemIcon>
                                        <Typography variant="caption">
                                            Hiểu chi tiết về các khái niệm cơ bản trong JS
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <DoneIcon sx={{ color: '#f05123', width: '18px' }} />
                                        </ListItemIcon>
                                        <Typography variant="caption">
                                            Hiểu chi tiết về các khái niệm cơ bản trong JS
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <DoneIcon sx={{ color: '#f05123', width: '18px' }} />
                                        </ListItemIcon>
                                        <Typography variant="caption">
                                            Hiểu chi tiết về các khái niệm cơ bản trong JS
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <DoneIcon sx={{ color: '#f05123', width: '18px' }} />
                                        </ListItemIcon>
                                        <Typography variant="caption">
                                            Hiểu chi tiết về các khái niệm cơ bản trong JS
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <DoneIcon sx={{ color: '#f05123', width: '18px' }} />
                                        </ListItemIcon>
                                        <Typography variant="caption">
                                            Hiểu chi tiết về các khái niệm cơ bản trong JS
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <DoneIcon sx={{ color: '#f05123', width: '18px' }} />
                                        </ListItemIcon>
                                        <Typography variant="caption">
                                            Hiểu chi tiết về các khái niệm cơ bản trong JS
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <DoneIcon sx={{ color: '#f05123', width: '18px' }} />
                                        </ListItemIcon>
                                        <Typography variant="caption">
                                            Hiểu chi tiết về các khái niệm cơ bản trong JS
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Link to={SCREEN.LEARNING}>
                                <Typography variant="h4" my={3}>
                                    Nội dung khóa học
                                </Typography>
                            </Link>
                            <Box display="flex">
                                <Typography variant="caption" mr={1}>
                                    20 chương
                                </Typography>
                                <Typography variant="caption" mr={1}>
                                    • 204 bài học
                                </Typography>
                                <Typography variant="caption">• Thời lượng </Typography>
                            </Box>
                        </Box>
                        <Typography variant="subtitle2" sx={{ color: '#f05123' }}>
                            Mở rộng tất cả
                        </Typography>
                    </Box>
                    <AccordionCourse />
                </Grid>
                <Grid item xs={12} sm={12} md={4} sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
                    <Intro />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Courses;
