import { Grid, IconButton, Link, Stack, Typography } from '@mui/material';
import { Box } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState } from 'react';
import AboutUs from './AboutUs';

function FooterComponent() {
    const [open, setOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    return (
        <Box sx={{ px: 8, mt: 8, py: 8, bgcolor: '#181821', color: '#a9b3bb' }}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Box display="flex" flexDirection="row" alignItems="center" mb={2}>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ mr: 2, ml: '4px', color: '#ff8f26', p: 0 }}>
                            <AutoStoriesIcon />
                        </IconButton>
                        <Typography variant="subtitle1" sx={{ flexGrow: 1 }} color="white">
                            Học lập trình để đi làm
                        </Typography>
                    </Box>
                    <Stack flexDirection="row" mb={1}>
                        <Typography sx={{ mr: 1 }}>Điện thoại: </Typography>
                        <Link href="tel:0961010601" sx={{ textDecoration: 'none', color: '#a9b3bb' }}>
                            0961010601
                        </Link>
                    </Stack>
                    <Stack flexDirection="row" mb={1}>
                        <Typography sx={{ mr: 1 }}>Email: </Typography>
                        <Link href="mailto:canxuanthang2001tt@gmail.com" sx={{ textDecoration: 'none', color: '#a9b3bb' }}>
                            canxuanthang2001tt@gmail.com
                        </Link>
                    </Stack>
                    <Typography>
                        Số 11D, lô A10, khu đô thị Nam Trung Yên, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle1" color="white" mb={2}>
                        Về chúng tôi
                    </Typography>
                    <Typography
                        sx={{ cursor: 'pointer', mb: 1 }}
                        onClick={() => {
                            setOpen(true);
                            setTitle('info');
                        }}>
                        Giới thiệu
                    </Typography>
                    <Typography
                        sx={{ cursor: 'pointer', mb: 1 }}
                        onClick={() => {
                            setOpen(true);
                            setTitle('contact');
                        }}>
                        Liên hệ
                    </Typography>
                    <Typography
                        sx={{ cursor: 'pointer', mb: 1 }}
                        onClick={() => {
                            setOpen(true);
                            setTitle('term');
                        }}>
                        Điều khoản
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle1" color="white" mb={2}>
                        Theo dõi chúng tôi
                    </Typography>
                    <Box>
                        <FacebookIcon sx={{ width: '30px', height: '30px' }} />
                        <YouTubeIcon sx={{ width: '30px', height: '30px' }} />
                    </Box>
                </Grid>
            </Grid>
            <AboutUs open={open} setOpen={setOpen} title={title} />
        </Box>
    );
}

export default FooterComponent;
