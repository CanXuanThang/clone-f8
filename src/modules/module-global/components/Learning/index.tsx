import { Box, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import AccordionCourse from '../Courses/AccordionCourse';
import Comment from './Comment';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ReactPlayer from 'react-player';

function Learning() {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    return (
        <Box position="relative">
            <Grid container>
                <Grid item xs={open ? 9 : 12}>
                    <ReactPlayer
                        url="https://www.youtube.com/embed/0SJE9dYdpps"
                        controls={true}
                        width="100%"
                        height="550px"
                        // style={{ maxHeight: '550px' }}
                    />
                    <Box mx={8}>
                        <Typography variant="h3" mt={6}>
                            Tại sao nên học trên website này hơn là học trên Youtube?
                        </Typography>
                        <Typography variant="caption" my={1} sx={{ display: 'block' }}>
                            Cập nhật tháng 11 năm 2022
                        </Typography>
                    </Box>
                    <Comment />
                </Grid>
                {open && (
                    <Grid item xs={3}>
                        <AccordionCourse open={open} setOpen={setOpen} />
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
    );
}

export default Learning;
