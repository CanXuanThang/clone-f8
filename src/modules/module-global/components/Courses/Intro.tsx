import { Box, Button, Card, CardContent, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import TheatersIcon from '@mui/icons-material/Theaters';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import PlayCircle from '@mui/icons-material/PlayCircle';
import a1 from '../../imgs/1.png';
import { useState } from 'react';
import DialogBase from '@src/modules/module-base/components/DialogBase';
import DialogLogin from '../Auth/Login/DialogLogin';

function Intro() {
    const [open, setOpen] = useState<boolean>(false);
    const [openLogin, setOpenLogin] = useState<boolean>(false);
    const [type, setType] = useState<string>('register');
    const [value, setValue] = useState<number | null>(2);

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
                <img src={a1} alt="" />
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
                <Typography variant="h3" color="#f05123">
                    Miễn phí
                </Typography>
                <Button
                    sx={{ borderRadius: '99px', bgcolor: '#f05123', p: '6px 30px', color: '#fff', my: 2 }}
                    onClick={() => setOpenLogin(true)}>
                    ĐĂNG KÝ HỌC
                </Button>
                <Box pl="30%">
                    <Box display="flex" alignItems="center">
                        <SpeedIcon />
                        <Typography ml={1} my={1}>
                            Trình độ cơ bản
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <TheatersIcon />
                        <Typography ml={1} my={1}>
                            Tổng số 204 bài học
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <AccessTimeIcon />
                        <Typography ml={1} my={1}>
                            Thời lượng
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
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Box>
            </CardContent>
            <DialogBase
                open={open}
                setOpen={setOpen}
                textTitle={
                    <>
                        <Box textAlign="center">
                            <Typography>Giới thiệu khóa học</Typography>
                            <Typography variant="h5" my={3}>
                                Lập trình JavaScript cơ bản
                            </Typography>
                        </Box>
                        <iframe
                            width="100%"
                            height="500px"
                            src="https://www.youtube.com/embed/0SJE9dYdpps"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </>
                }
            />
            <DialogLogin open={openLogin} setOpen={setOpenLogin} type={type} setType={setType} />
        </Card>
    );
}

export default Intro;
