import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const name = 'HTML CSS Pro';

function Payment() {
    return (
        <Container sx={{ my: 14 }}>
            <Typography variant="h2" textAlign="center" mb={6}>
                Mở khóa toàn bộ khóa học
            </Typography>
            <Grid container spacing={4}>
                <Grid item md={7} xs={12}>
                    <Box mb={2}>
                        <Typography mb={2}>
                            Sở hữu khóa học {name} đầy đủ và chi tiết nhất bạn có thể tìm kiếm trên Internet
                        </Typography>
                        <Typography>
                            Có tới hàng trăm bài tập thực hành sau mỗi bài học và bạn sẽ được làm 8 dự án thực tế trong khóa
                            học này. Với 1000+ bài học (bao gồm video, bài tập, thử thách, flashcards, v.v) sẽ giúp bạn nắm
                            kiến thức nền tảng vô cùng chắc chắn.
                        </Typography>
                    </Box>
                    <Box sx={{ bgcolor: '#ccc', textAlign: 'end', p: '16px', borderRadius: '12px' }}>
                        <Typography color="#a2adbd">
                            Giá bán:{' '}
                            <Typography component="span" color="#ff8f26" variant="body2">
                                1,299,000đ
                            </Typography>
                        </Typography>
                        <Divider sx={{ borderWidth: '1px', borderColor: '#333c6d', my: 2 }} />
                        <Typography variant="h6">
                            Tổng tiền:{' '}
                            <Typography component="span" color="#ff8f26" variant="body2">
                                1,299,000đ
                            </Typography>
                        </Typography>
                    </Box>
                    <Button fullWidth variant="contained" sx={{ mt: 3 }}>
                        Lấy thông tin thanh toán
                    </Button>
                </Grid>
                <Grid item md={5} xs={12}>
                    <Card sx={{ border: '1px solid #a174ff' }}>
                        <CardHeader title="Bạn sẽ nhận được gì ?" sx={{ textAlign: 'center' }} />
                        <CardContent>
                            <Box sx={{ display: 'flex', mb: 1 }}>
                                <CheckCircleOutlineIcon />
                                <Typography>Truy cập toàn bộ kháo {name}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mb: 1 }}>
                                <EmojiPeopleIcon />
                                <Typography>Hơn 627 bài học</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mb: 1 }}>
                                <AllInclusiveIcon />
                                <Typography>Hơn 627 bài học</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mb: 1 }}>
                                <ContactSupportIcon />
                                <Typography>Kênh hỏi đáp riêng tư</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mb: 1 }}>
                                <AutoAwesomeIcon />
                                <Typography>Cập nhật khóa học trong tương lai</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mb: 1 }}>
                                <CircleNotificationsIcon />
                                <Typography>Nhận chứng chỉ khi hoàn thành</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Payment;
