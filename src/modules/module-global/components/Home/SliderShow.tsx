import { Box } from '@mui/material';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SliderShowStyle.scss';
import { useQuery } from '@tanstack/react-query';
import { getCoursePopularApi } from '../../api/Course';
import { useEffect } from 'react';
import { CHANGE_LINK } from '../../constants/screen';

function SliderShow() {
    const { refetch, data } = useQuery({
        queryKey: ['GET_COURSE_POPULAR'],
        queryFn: () => getCoursePopularApi({}),
        enabled: false,
    });

    useEffect(() => {
        refetch().then();
    }, []);

    return (
        <Box sx={{ margin: '32px' }}>
            <Slide autoplay={true}>
                {data?.data.map((item) => (
                    <Box
                        key={item.id}
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
                                backgroundImage: `url(${item.image.replace(CHANGE_LINK, '')})`,
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
