import { Box, Button, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { CHANGE_LINK, SCREEN } from '@src/modules/module-global/constants/screen';
import { DataCourse } from '@src/modules/module-global/models/apis';
import { useNavigate } from 'react-router-dom';

interface Props {
    item: DataCourse;
    disable?: boolean;
    isStar?: boolean;
}

function CardBase({ item, disable = false, isStar = true }: Props) {
    const navigation = useNavigate();

    return (
        <Card>
            <CardMedia
                sx={{
                    position: 'relative',
                    img: {
                        borderRadius: '12px',
                        width: '100%',
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
                {item.image && <img src={item.image.replace(CHANGE_LINK, '')} alt={item.name} />}
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
            <CardContent
                sx={{
                    p: 0,
                    pt: 1,
                    pb: '0px !important',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="subtitle2">{item.name}</Typography>
                    {isStar && <Rating size="small" name="simple-controlled" defaultValue={item.rating} readOnly />}
                </Box>
                {!disable && (
                    <Box display="flex" alignItems="center" justifyContent="space-between" my={1}>
                        <Typography variant="caption" color="black" mr={1} sx={{ textDecoration: 'line-through' }}>
                            {`${item.price.toLocaleString()} đ`}
                        </Typography>
                        <Typography variant="subtitle2" color="#f05123">
                            {`${item.priceDiscount.toLocaleString()} đ`}
                        </Typography>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
}

export default CardBase;
