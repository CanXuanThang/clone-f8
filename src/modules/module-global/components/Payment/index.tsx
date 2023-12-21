import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useLocation, useParams } from 'react-router-dom';
import { DataCourse } from '../../models/apis';
import DialogBanking from './DialogBanking';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { getQRCodeApi } from '../../api/Bill';
import CircularBase from '@src/modules/module-base/components/CircularBase';
import { getCourseById } from '../../api/Course';

function Payment() {
    const location = useLocation();
    const [open, setOpen] = useState<boolean>(false);
    const param = useParams();

    const mutation = useMutation({
        mutationFn: getQRCodeApi,
    });

    const data = useMutation({
        mutationFn: getCourseById,
    });

    useEffect(() => {
        mutation.mutate({ data: { courseId: Number(param.courseId) } });
    }, [param]);

    useEffect(() => {
        data.mutate({ data: { id: Number(param.courseId) } });
    }, [param]);

    return (
        <Container sx={{ my: 14 }}>
            <CircularBase isLoading={mutation.isLoading} />
            <Typography variant="h2" textAlign="center" mb={6}>
                Mở khóa toàn bộ khóa học
            </Typography>
            <Grid container spacing={4}>
                <Grid item md={7} xs={12}>
                    <Box mb={2}>
                        <Typography mb={2}>
                            Sở hữu khóa học {data.data?.data.name} đầy đủ và chi tiết nhất bạn có thể tìm kiếm trên Internet
                        </Typography>
                        <Typography>
                            Có tới hàng trăm bài tập thực hành sau mỗi bài học và bạn sẽ được làm 8 dự án thực tế trong khóa
                            học này. Với 1000+ bài học (bao gồm video, flashcards, v.v) sẽ giúp bạn nắm kiến thức nền tảng vô
                            cùng chắc chắn.
                        </Typography>
                    </Box>
                    <Box sx={{ bgcolor: '#ccc', textAlign: 'end', p: '16px', borderRadius: '12px' }}>
                        <Box display="flex" justifyContent="space-between" alignItems="end">
                            <img src={mutation.data?.data.qrDataURL} style={{ width: '180px', textAlign: 'center' }} />
                            <Box>
                                <Typography color="#a2adbd">
                                    Giá bán:{' '}
                                    <Typography component="span" color="#ff8f26" variant="body2">
                                        {data.data?.data.price.toLocaleString()}đ
                                    </Typography>
                                </Typography>
                                <Typography color="#a2adbd">
                                    Discount:{' '}
                                    <Typography component="span" color="#ff8f26" variant="body2">
                                        {data.data?.data.discount.toLocaleString()}%
                                    </Typography>
                                </Typography>
                            </Box>
                        </Box>
                        <Divider sx={{ borderWidth: '1px', borderColor: '#333c6d', my: 2 }} />
                        <Typography variant="h6">
                            Tổng tiền:{' '}
                            <Typography component="span" color="#ff8f26" variant="body2">
                                {data.data?.data.priceDiscount.toLocaleString()}đ
                            </Typography>
                        </Typography>
                    </Box>
                    <Button fullWidth variant="contained" sx={{ mt: 3 }} onClick={() => setOpen(true)}>
                        Xác nhận
                    </Button>
                </Grid>
                <Grid item md={5} xs={12}>
                    <Card sx={{ border: '1px solid #a174ff' }}>
                        <CardHeader title="Bạn sẽ nhận được gì ?" sx={{ textAlign: 'center' }} />
                        <CardContent>
                            <Box sx={{ display: 'flex', mb: 1 }}>
                                <CheckCircleOutlineIcon />
                                <Typography>Truy cập toàn bộ kháo {data.data?.data.name}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mb: 1 }}>
                                <EmojiPeopleIcon />
                                <Typography>Hơn {data.data?.data.lessons.length} bài học</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', mb: 1 }}>
                                <ContactSupportIcon />
                                <Typography>Kênh hỏi đáp riêng tư</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mb: 1 }}>
                                <AutoAwesomeIcon />
                                <Typography>Cập nhật khóa học trong tương lai</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <DialogBanking open={open} setOpen={setOpen} />
        </Container>
    );
}

export default Payment;
