import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import a9 from '../../../imgs/111.png';
import a10 from '../../../imgs/222.png';
import { imgs } from './Img';

function BodyComponent() {
    return (
        <Box px={10} sx={{ md: { px: 0 } }}>
            <Box>
                <Typography variant="h5" sx={{ pt: 6, pb: 2 }}>
                    Khóa học Pro
                </Typography>
                <Box
                    display="flex"
                    sx={{
                        overflow: 'auto',
                    }}>
                    <Grid container spacing={2}>
                        {imgs.map((img) => (
                            <Grid item xs={12} sm={6} md={3} key={img.link}>
                                <Card>
                                    <CardMedia component="img" image={img.link} />
                                </Card>
                                <CardContent sx={{ p: 0, pt: 1, pb: '0px !important' }}>
                                    <Typography variant="subtitle2">{img.name}</Typography>
                                    <Typography variant="subtitle2" color="#f05123" my={1}>
                                        {img.price}
                                    </Typography>
                                </CardContent>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Box>
                <Typography variant="h5" sx={{ pt: 6, pb: 2 }}>
                    Cominng Soon
                </Typography>
                <Box
                    display="flex"
                    sx={{
                        overflow: 'auto',
                    }}>
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
        </Box>
    );
}

export default BodyComponent;
