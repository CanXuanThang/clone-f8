import { Box, Button, Link, Stack, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { FormContainer } from 'react-hook-form-mui';
import TexFieldElementBase from '@module-base/components/react-hook-form-mui-base/TextFiledElementBase';

function ContactUs() {
    return (
        <Box sx={{ mx: 6 }}>
            <Box mb={4}>
                <Typography mb={4}>
                    Chúng tôi luôn sẵn sàng tiếp nhận mọi ý kiến ​đóng góp và giải đáp những yêu cầu của bạn. <br />
                    Hãy liên hệ ngay với chúng tôi
                </Typography>
                <Stack flexDirection="row" alignItems="center" mb={1}>
                    <HomeIcon />
                    <Typography pl={1}>
                        Số 11D, lô A10, khu đô thị Nam Trung Yên, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội
                    </Typography>
                </Stack>
                <Box display="flex" alignItems="center" mb={1}>
                    <PhoneIcon />
                    <Link href="tell:0961010601" sx={{ textDecoration: ' none', color: '#000', pl: 1 }}>
                        0961010601
                    </Link>
                </Box>
                <Box display="flex" alignItems="center">
                    <EmailIcon />
                    <Link href="mailto:canxuanthang2001tt@gmail.com" sx={{ textDecoration: ' none', color: '#000', pl: 1 }}>
                        canxuanthang2001tt@gmail.com
                    </Link>
                </Box>
            </Box>
            <FormContainer defaultValues={{ name: '', email: '', phone: '', text: '' }}>
                <TexFieldElementBase
                    label="Họ và tên"
                    textFieldProps={{
                        type: 'text',
                        name: 'name',
                        spellCheck: false,
                        required: true,
                        autoFocus: true,
                        placeholder: 'Nhập tên đầy đủ',
                        parseError: ({ type }) =>
                            type === 'required' ? 'Bạn cần nhập trường này!' : 'Vui lòng nhập họ và tên!',
                    }}
                />
                <TexFieldElementBase
                    label="Email"
                    textFieldProps={{
                        type: 'email',
                        name: 'email',
                        spellCheck: false,
                        required: true,
                        placeholder: 'Nhập email',
                        autoFocus: true,
                        parseError: ({ type }) => (type === 'required' ? 'Bạn cần nhập trường này!' : 'Vui lòng nhập email!'),
                    }}
                />
                <TexFieldElementBase
                    label="Điện thoại"
                    textFieldProps={{
                        type: 'text',
                        name: 'phone',
                        spellCheck: false,
                        required: true,
                        placeholder: 'Nhập số điện thoại',
                        autoFocus: true,
                        parseError: ({ type }) =>
                            type === 'required' ? 'Bạn cần nhập trường này!' : 'Vui lòng nhập số điện thoại!',
                    }}
                />
                <TexFieldElementBase
                    label="Nội dung"
                    textFieldProps={{
                        type: 'text',
                        name: 'text',
                        spellCheck: false,
                        required: true,
                        placeholder: 'Nhập nội duung liên hệ',
                        autoFocus: true,
                        parseError: ({ type }) =>
                            type === 'required' ? 'Bạn cần nhập trường này!' : 'Vui lòng nhập nội dung!',
                    }}
                />
                <Button
                    type="submit"
                    size="small"
                    sx={{
                        bgcolor: '#f05123',
                        color: '#fff',
                        fontSize: '14px',
                        p: '9px 32px',
                        borderRadius: '99px',
                        '&:hover': { bgcolor: '#f16239' },
                        my: 3,
                    }}>
                    Gửi đi
                </Button>
            </FormContainer>
        </Box>
    );
}

export default ContactUs;
