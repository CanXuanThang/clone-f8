import { Box, Grid, Typography } from '@mui/material';

function Infomation() {
    return (
        <Box sx={{ p: 0 }}>
            <Box sx={{ background: 'linear-gradient(171deg,#2b87da,#00ace0)', color: '#fff', px: 8, py: 4 }}>
                <Typography variant="subtitle1" mb={1}>
                    BẠN CÓ BIẾT ?
                </Typography>
                <Typography>
                    Ngoài kia có rất nhiều bạn làm sai nghề, tư duy an phận và bị chôn chân với một công việc không đủ vui,
                    không đủ sống, các bạn ấy gặp hết khủng hoảng tuổi này tới tuổi kia.
                </Typography>
                <Typography my={1}>
                    Tuổi 22 đang ngỡ ngàng không biết mình nên làm nghề gì. Tuổi 28 thì bàng hoàng không biết lương như mình
                    thì lập gia đình và nuôi dạy con cái làm sao. Tuổi 40 nuối tiếc thanh xuân của mình liệu có phải đã phí
                    hoài không nhỉ...
                </Typography>
                <Typography my={1}>
                    Mọi chuyện sẽ rất khác nếu họ được định hướng công việc phù hợp, biết cách đặt cho mình một mục tiêu rõ
                    ràng và có đầy đủ kĩ năng cần thiết để phát triển sự nghiệp.
                </Typography>
                <Typography>
                    F8 mong muốn trở thành một tổ chức góp phần tạo nên sự thay đổi đó, và việc tạo ra cộng đồng học lập trình
                    mới chỉ là điểm bắt đầu. Chúng tôi đang nỗ lực tạo ra các khóa học có nội dung chất lượng vượt trội, giúp
                    học viên sau khi hoàn thành khóa học có thể trở thành những lập trình viên luôn được nhiều công ty săn
                    đón.
                </Typography>
            </Box>
            <Box sx={{ px: 8, py: 4 }}>
                <Typography variant="subtitle1" color="#0c71c3" mb={1}>
                    Tầm nhìn
                </Typography>
                <Typography>
                    Trở thành công ty công nghệ giáo dục có vị thế vững vàng trên thị trường, với các sản phẩm hỗ trợ học lập
                    trình chất lượng, thông minh và hiệu quả. F8 sẽ nổi tiếng bởi chất lượng sản phẩm vượt trội và được cộng
                    đồng tin tưởng chứ không phải vì tiếp thị tốt.
                </Typography>
            </Box>
            <Box sx={{ px: 8, pb: 4 }}>
                <Typography variant="subtitle1" color="#0c71c3" mb={1}>
                    Giá trị cốt lõi
                </Typography>
                <Typography mb={1}>
                    Sự tử tế: Tử tế trong chính người F8 với nhau và tử tế với học viên là kim chỉ nam phấn đấu. Đã làm sản
                    phẩm là phải chất lượng và chứng minh được hiệu quả, bất kể là sản phẩm miễn phí hay giá rẻ. Làm ra phải
                    thấy muốn để người thân mình dùng.
                </Typography>
                <Typography mb={1}>
                    Tư duy số: Sản phẩm làm ra không phải là để vừa lòng đội ngũ trong công ty. Sản phẩm làm ra với mục tiêu
                    cao nhất là người học thấy dễ học, được truyền cảm hứng tự học, học tới bài học cuối cùng và người học có
                    thể tự tay làm ra những dự án bằng kiến thức đã học.
                </Typography>
                <Typography mb={1}>
                    Luôn đổi mới và không ngừng học: Học từ chính đối thủ, học từ những công ty công nghệ giáo dục tốt trên
                    thế giới và luôn luôn lắng nghe mọi góp ý từ phía học viên.
                </Typography>
                <Typography>
                    Tư duy bền vững: Có hai thứ đáng để đầu tư giúp mang lại thành quả tài chính tốt nhất trong dài hạn của
                    một công ty đó là nhân viên và khách hàng.
                </Typography>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    pb: 4,
                    background: 'linear-gradient(171deg,#2b87da,#00ace0)',
                    height: '156px',
                }}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '56px',
                        background: '#fff',
                        px: 8,
                        mx: 12,
                        py: 6,
                        boxShadow: '0 12px 18px -6px rgba(0,0,0,.12)',
                    }}>
                    <Typography variant="subtitle1" textAlign="center" color="#0c71c3" my={6}>
                        BẠN NHẬN ĐƯỢC GÌ TỪ CHÚNG TÔI?
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" color="#000" mb={1}>
                                1. Sự thành thạo
                            </Typography>
                            <Typography>
                                Các bài học đi đôi với thực hành, làm bài kiểm tra ngay trên trang web và bạn luôn có sản phẩm
                                thực tế sau mỗi khóa học.
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" color="#000" mb={1}>
                                2. Tính tự học
                            </Typography>
                            <Typography>
                                Một con người chỉ thực sự trưởng thành trong sự nghiệp nếu họ biết cách tự thu nạp kiến thức
                                mới cho chính mình.
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" color="#000" mb={1}>
                                3. Tiết kiệm thời gian
                            </Typography>
                            <Typography>
                                Thay vì chật vật vài năm thì chỉ cần 4-6 tháng để có thể bắt đầu công việc đầu tiên với vị trí
                                Intern tại công ty IT.
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" color="#000" mb={1}>
                                4. Làm điều quan trọng
                            </Typography>
                            <Typography>
                                Chỉ học và làm những điều quan trọng để đạt được mục tiêu đi làm được trong thời gian ngắn
                                nhất.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box mt="340px" px={8} mb={6}>
                <Typography textAlign="center" color="#0c71c3" mb={2}>
                    MÔI TRƯỜNG LÀM VIỆC
                </Typography>
                <Typography mb={1}>
                    Môi trường làm việc lành mạnh. Không toxic, không gossip, trong công việc thử thách hết mình nhưng ngoài
                    công việc không bè phái ganh đua hay tấn công gì nhau.
                </Typography>
                <Typography mb={1}>
                    Quan điểm làm việc của F8 là dân chủ, sếp có thể sai nhưng tổ chức phải đúng. Sai thì nhận và sửa. Nhân
                    viên thoải mái nói lên chính kiến của mình. Trên dưới lắng nghe và cởi mở với góc nhìn của nhau, quyết tâm
                    vì mục tiêu chung.
                </Typography>
                <Typography mb={1}>
                    Tỷ lệ nghỉ việc tại các bộ phận chuyên môn cao dưới 5%, nhưng đối với F8 đúng người đúng việc sẽ quan
                    trọng hơn. Các bạn được thử thách với công việc mới khi đã làm tốt chuyên môn cũ và công ty luôn sẵn sàng
                    đầu tư cho nhân viên đi học thêm các kỹ năng cần thiết cho công việc. Quan điểm của F8, nhân viên là người
                    bạn đồng hành cùng sự phát triển của công ty, luôn sẵn sàng giúp nhân viên có cuộc sống cân bằng và phát
                    triển chuyên môn tối đa.
                </Typography>
            </Box>
        </Box>
    );
}

export default Infomation;
