import { Box } from '@mui/material';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SliderShowStyle.scss';

function SliderShow() {
    const images = [
        'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
        'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    ];
    return (
        <Box sx={{ margin: '32px' }}>
            <Slide autoplay={true}>
                {images.map((image: string, index: number) => (
                    <Box
                        key={index}
                        sx={{
                            '> div': {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundSize: 'cover',
                                height: '350px',
                            },
                            borderRadius: '12px',
                        }}>
                        <Box
                            sx={{
                                backgroundImage: `url(${image})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundAttachment: 'fixed',
                                backgroundPosition: 'center',
                            }}
                        />
                    </Box>
                ))}
            </Slide>
        </Box>
    );
}

export default SliderShow;
