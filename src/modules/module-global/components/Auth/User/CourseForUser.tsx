import { Box, Button, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { CHANGE_LINK, SCREEN } from '@src/modules/module-global/constants/screen';
import { DataCourse } from '@src/modules/module-global/models/apis';
import { useNavigate } from 'react-router-dom';

interface Props {
    item: DataCourse;
}

function CourseForUser({ item }: Props) {
    const navigation = useNavigate();

    return (
        <Card sx={{ maxWidth: '250px' }}>
            <CardMedia
                sx={{
                    position: 'relative',
                    display: 'flex',
                    img: {
                        borderRadius: '12px',
                        width: '100%',
                        height: '150px',
                    },
                    '&:hover': {
                        button: {
                            display: 'flex',
                            bgcolor: 'rgba(0,0,0,.5)',
                            overflow: 'hidden',
                            cursor: 'pointer',
                        },
                    },
                }}>
                {item.image && <img src={item.image.replace(CHANGE_LINK, '../../../../../public/')} alt={item.name} />}
                <Button className="course" onClick={() => navigation(SCREEN.COURSE.replace('/:courseId', `/${item.id}`))}>
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
                </Button>
            </CardMedia>
        </Card>
    );
}

export default CourseForUser;
