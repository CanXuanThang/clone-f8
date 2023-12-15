import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CHANGE_LINK } from '@src/modules/module-global/constants/screen';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

interface Props {
    item: any;
    disable?: boolean;
}

function CardBase({ item, disable = false }: Props) {
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
                {!disable && (
                    <Typography variant="subtitle2" color="#f05123" my={1}>
                        {item.price}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}

export default CardBase;
