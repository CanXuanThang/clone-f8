import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './BodyComponent.scss';
import { useQuery } from '@tanstack/react-query';
import { getCourseAll } from '@src/modules/module-global/api/Course';
import { useEffect } from 'react';
import slugify from 'slugify';
import { CHANGE_LINK } from '@src/modules/module-global/constants/screen';
import CircularBase from '@src/modules/module-base/components/CircularBase';

function BodyComponent() {
    const { refetch, data, isLoading } = useQuery({
        queryKey: ['GET_COURSE_ALL'],
        queryFn: () => getCourseAll({}),
        enabled: false,
    });

    useEffect(() => {
        refetch().then();
    }, []);

    return (
        <Box px={10} sx={{ md: { px: 0 } }} mb={8}>
            <CircularBase isLoading={isLoading} />
            <Box>
                <Typography variant="h5" sx={{ pt: 6, pb: 2 }}>
                    Khóa học Pro
                </Typography>
                <Grid container spacing={2}>
                    {data ? (
                        data?.data?.data.map((item) => (
                            <Grid item xs={12} sm={6} md={3} key={item.id}>
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
                                        <img src={item.image.replace(CHANGE_LINK, '.')} alt={item.name} />
                                        <Link className="course" to={slugify(item.name, { replacement: '-', lower: true })}>
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
                                            alignItems: 'center',
                                        }}>
                                        <Typography variant="subtitle2">{item.name}</Typography>
                                        <Typography variant="subtitle2" color="#f05123" my={1}>
                                            {item.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Typography>Chưa có khóa học nào</Typography>
                    )}
                </Grid>
            </Box>
        </Box>
    );
}

export default BodyComponent;
