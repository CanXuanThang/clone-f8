import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import a9 from '../../../imgs/111.png';
import a10 from '../../../imgs/222.png';
import { imgs } from './Img';
import { Link } from 'react-router-dom';
import './BodyComponent.scss';

function BodyComponent() {
    return (
        <Box px={10} sx={{ md: { px: 0 } }} mb={8}>
            <Box>
                <Typography variant="h5" sx={{ pt: 6, pb: 2 }}>
                    Khóa học Pro
                </Typography>
                <Grid container spacing={2}>
                    {imgs.map((item) => (
                        <Grid item xs={12} sm={6} md={3} key={item.img}>
                            <Card>
                                <CardMedia
                                    sx={{
                                        position: 'relative',
                                        img: {
                                            borderRadius: '12px',
                                            width: '100%',
                                        },
                                        '&:hover': {
                                            a: {
                                                display: 'flex',
                                                bgcolor: 'rgba(0,0,0,.5)',
                                                overflow: 'hidden',
                                            },
                                        },
                                    }}>
                                    <img src={item.img} alt={item.name} />
                                    <Link className="course" to={item.link}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                bgcolor: '#fff !important',
                                                textTransform: 'inherit',
                                                p: '8px 12px',
                                                borderRadius: '99px',
                                                textDecoration: 'none',
                                            }}>
                                            Xem khóa học
                                        </Typography>
                                    </Link>
                                </CardMedia>
                                <CardContent
                                    sx={{
                                        p: 0,
                                        pt: 1,
                                        pb: '0px !important',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}>
                                    <Box>
                                        <Typography variant="subtitle2">{item.name}</Typography>
                                        <Typography variant="subtitle2" color="#f05123" my={1}>
                                            {item.price}
                                        </Typography>
                                    </Box>
                                    <Button
                                        sx={{ bgcolor: '#ff8f26', borderRadius: '99px', fontSize: '12px', color: '#fff' }}>
                                        Thêm vào giỏ hàng
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box>
                <Typography variant="h5" sx={{ pt: 6, pb: 2 }}>
                    Cominng Soon
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardMedia component="img" image={a9} />
                        </Card>
                        <CardContent sx={{ p: 0, pt: 1, pb: '0px !important' }}>
                            <Typography variant="subtitle2">NextJS Pro</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardMedia component="img" image={a10} />
                        </Card>
                        <CardContent sx={{ p: 0, pt: 1, pb: '0px !important' }}>
                            <Typography variant="subtitle2">JavaScript Pro</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default BodyComponent;
