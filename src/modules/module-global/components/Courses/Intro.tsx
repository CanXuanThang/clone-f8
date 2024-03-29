import { Box, Card, CardContent, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import TheatersIcon from '@mui/icons-material/Theaters';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import PlayCircle from '@mui/icons-material/PlayCircle';
import { useEffect, useState } from 'react';
import DialogBase from '@src/modules/module-base/components/DialogBase';
import DialogLogin from '../Auth/Login/DialogLogin';
import { DataCourse } from '../../models/apis/Course';
import { CHANGE_LINK, SCREEN } from '../../constants/screen';
import ReactPlayer from 'react-player';
import CircularBase from '@src/modules/module-base/components/CircularBase';
import { useMutation } from '@tanstack/react-query';
import { getCourseByUser } from '../../api/Course';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { accessToken } from '@src/modules/module-base/constants';
import { AppState } from '../../redux';
import { LoadingButton } from '@mui/lab';

interface Props {
    data: DataCourse;
    isLoading: boolean;
}

function Intro({ data, isLoading }: Props) {
    const [open, setOpen] = useState<boolean>(false);
    const [openLogin, setOpenLogin] = useState<boolean>(false);
    const [type, setType] = useState<string>('login');
    const [isCourse, setIsCourse] = useState<boolean>();
    const [text, setText] = useState<string>('ĐĂNG NHẬP');

    const navigation = useNavigate();
    const token = useSelector((state: AppState) => state.profile.token);
    const tokenCookie = Cookies.get(accessToken);

    const mutation = useMutation({
        mutationFn: getCourseByUser,
        onSuccess: (res) => {
            if (res) {
                res.content.map((item) => {
                    if (item.course.id === data.id) {
                        return setIsCourse(true);
                    }
                });
            } else {
                setIsCourse(false);
            }
        },
    });

    useEffect(() => {
        mutation.mutate({ data: { pageIndex: 1, pageSize: 10 } });
    }, []);

    useEffect(() => {
        isCourse ? setText('TIẾP TỤC HỌC') : !!tokenCookie ? setText('ĐĂNG KÝ HỌC') : setText('ĐĂNG NHẬP');
    }, [isCourse]);

    return (
        <Card>
            <CardMedia
                sx={{
                    position: 'relative',
                    img: {
                        borderRadius: '12px',
                        width: '100%',
                    },
                }}>
                <img src={data?.image.replace(CHANGE_LINK, '../../../../../public/')} alt={data.name} />
                <IconButton
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '98%',
                        textDecoration: 'none',
                        color: '#000',
                        borderRadius: '12px',
                        backgroundImage: 'linear-gradient(180deg,rgba(30,30,28,0),rgba(30,30,28,.9))',
                        flexDirection: 'column',
                    }}
                    onClick={() => setOpen(true)}>
                    <PlayCircle sx={{ color: '#fff', width: '76px', height: '76px' }} />
                    <Typography variant="subtitle1" color="#fff" pt={3}>
                        Xem giới thiệu khóa học
                    </Typography>
                </IconButton>
            </CardMedia>
            <CardContent sx={{ textAlign: 'center' }}>
                <LoadingButton
                    sx={{ borderRadius: '99px', bgcolor: '#f05123', p: '6px 30px', color: '#fff', my: 2 }}
                    loading={mutation.isLoading}
                    onClick={() =>
                        isCourse
                            ? navigation(SCREEN.LEARNING.replace('/:courseId', `/${data?.id}`), { replace: true })
                            : !!token || !!tokenCookie
                            ? navigation(SCREEN.PAYMENT.replace('/:courseId', `/${data?.id}`), { state: data && data })
                            : setOpenLogin(true)
                    }>
                    {text}
                </LoadingButton>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box display="flex" alignItems="center">
                        <TheatersIcon />
                        <Typography ml={1} my={1}>
                            Tổng số {data?.lessons.length} bài học
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <BatteryChargingFullIcon />
                        <Typography ml={1} my={1}>
                            Học mọi lúc mọi nơi
                        </Typography>
                    </Box>
                    <Rating
                        sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
                        name="simple-controlled"
                        value={data.rating}
                        readOnly
                    />
                </Box>
            </CardContent>
            <DialogBase
                open={open}
                setOpen={setOpen}
                textTitle={
                    <>
                        <CircularBase isLoading={isLoading} />
                        <Box textAlign="center">
                            <Typography>Giới thiệu khóa học</Typography>
                            <Typography variant="h5" my={3}>
                                {data?.name}
                            </Typography>
                        </Box>
                        {data && data?.lessons.length > 0 ? (
                            <ReactPlayer url={data?.lessons[0]?.embeddedLink} controls={true} width="100%" height="500px" />
                        ) : (
                            <Typography color="red">
                                Người bán hàng chưa bổ sung video giới thiệu. Vui lòng quay lại sau !!
                            </Typography>
                        )}
                    </>
                }
            />
            <DialogLogin open={openLogin} setOpen={setOpenLogin} type={type} setType={setType} />
        </Card>
    );
}

export default Intro;
