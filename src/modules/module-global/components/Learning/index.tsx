import { Box, Grid, Typography } from '@mui/material';
import AccordionCourse from '../Courses/AccordionCourse';
import Comment from './Comment';

function Learning() {
    return (
        <Box>
            <Grid container>
                <Grid item xs={9}>
                    <iframe
                        width="100%"
                        height="700px"
                        src="https://www.youtube.com/embed/0SJE9dYdpps"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                    <Box mx={8}>
                        <Typography variant="h3" mt={6}>
                            Tại sao nên học trên website này hơn là học trên Youtube?
                        </Typography>
                        <Typography variant="caption" my={1} sx={{ display: 'block' }}>
                            Cập nhật tháng 11 năm 2022
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <AccordionCourse />
                </Grid>
            </Grid>
            <Box>
                <Comment />
            </Box>
        </Box>
    );
}

export default Learning;
