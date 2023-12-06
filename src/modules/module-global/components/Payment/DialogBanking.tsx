import { Box, Button, Dialog, DialogContent, Divider, Grid, Typography } from '@mui/material';

function DialogBanking() {
    return (
        <Dialog open fullScreen>
            <DialogContent>
                <Grid container>
                    <Grid md={3} xs={12}>
                        <Box>
                            <Typography>Đang chờ thanh toán</Typography>
                            <Typography>ád</Typography>
                        </Box>
                        <Divider />
                        <Box>
                            <Typography>Tên khóa học: âfdfsdgsdff</Typography>
                            <Typography>Mã đơn hàng: sfsdfafsfd</Typography>
                        </Box>
                        <Divider />
                        <Box>
                            <input placeholder="Nhập mã khuyến mại" />
                            <Button>Áp dụng</Button>
                        </Box>
                        <Divider />
                        <Box>
                            <Box>
                                <Typography>Chi tiết thanh toán:</Typography>
                                <Box>
                                    <Box>
                                        <Typography>Giá bán:</Typography>
                                        <Typography>1,299,000đ</Typography>
                                    </Box>
                                    <Box>
                                        <Typography>Tổng tiền:</Typography>
                                        <Typography>1,299,000đ</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid md={9} xs={12}>
                        <Typography>Chuyển khoản bằng QR</Typography>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}

export default DialogBanking;
