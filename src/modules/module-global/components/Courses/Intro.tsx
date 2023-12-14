import { Box, Button, Card, CardContent, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import TheatersIcon from '@mui/icons-material/Theaters';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import PlayCircle from '@mui/icons-material/PlayCircle';
import { useState } from 'react';
import DialogBase from '@src/modules/module-base/components/DialogBase';
import DialogLogin from '../Auth/Login/DialogLogin';
import { DataCourse } from '../../models/apis/Course';
import { CHANGE_LINK } from '../../constants/screen';
import ReactPlayer from 'react-player';

interface Props {
    data: DataCourse | undefined;
}

function Intro({ data }: Props) {
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
                <img src={data?.image.replace(CHANGE_LINK, '.')} alt="" />
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
                <Button
                    sx={{ borderRadius: '99px', bgcolor: '#f05123', p: '6px 30px', color: '#fff', my: 2 }}
                    onClick={() => setOpenLogin(true)}>
                    ĐĂNG KÝ HỌC
                </Button>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box display="flex" alignItems="center">
                        <SpeedIcon />
                        <Typography ml={1} my={1}>
                            Trình độ cơ bản
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <TheatersIcon />
                        <Typography ml={1} my={1}>
                            Tổng số {data?.lessons.length} bài học
                        </Typography>
                    </Box>
                    {/* <Box display="flex" alignItems="center">
                        <AccessTimeIcon />
                        <Typography ml={1} my={1}>
                            Thời lượng
                        </Typography>
                    </Box> */}
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
                                {data?.name}
                            </Typography>
                        </Box>
                        <ReactPlayer url={data?.lessons[0].embeddedLink} controls={true} width="100%" height="500px" />
                    </>
                }
            />
            <DialogLogin open={openLogin} setOpen={setOpenLogin} type={type} setType={setType} />
        </Card>
    );
}

export default Intro;
