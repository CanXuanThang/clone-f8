import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

function FormLogin() {
    const [typeLogin, setTypeLogin] = useState<string>('phone');

    return (
        <Box width="100%" px={12}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {typeLogin === 'phone' ? (
                    <>
                        <Typography fontSize="14px" fontWeight="600">
                            Số điện thoại
                        </Typography>
                        <Box
                            onClick={() => setTypeLogin('email')}
                            sx={{ cursor: 'pointer', fontSize: '13px', opacity: '.7', fontWeight: 600 }}>
                            Đăng nhập với email
                        </Box>
                    </>
                ) : (
                    <>
                        <Typography fontSize="14px" fontWeight="600">
                            Email
                        </Typography>
                        <Box
                            onClick={() => setTypeLogin('phone')}
                            sx={{ cursor: 'pointer', fontSize: '13px', opacity: '.7', fontWeight: 600 }}>
                            Đăng nhập với SDT
                        </Box>
                    </>
                )}
            </Box>
            <Box>
                {typeLogin === 'phone' ? (
                    <FormContainer defaultValues={{ phone: '', code: '' }}>
                        <TextFieldElement
                            name="phone"
                            required
                            placeholder="Số điện thoại"
                            fullWidth
                            sx={{
                                '& > div': {
                                    borderRadius: '44px',
                                    '& > input': {
                                        p: '12px 5px 12px 20px',
                                    },
                                    '& > fieldset': {
                                        border: '1px solid #ccc',
                                        '& .MuiOutlinedInput-notchedOutline:hover': {
                                            borderColor: '#ccc',
                                        },
                                    },
                                },
                                my: 1,
                            }}
                        />
                        <br />
                        <Box sx={{ display: 'flex', border: '1px solid #ccc', borderRadius: '44px', alignItems: 'center' }}>
                            <TextFieldElement
                                name="code"
                                required
                                placeholder="Nhập mã xác nhận"
                                fullWidth
                                sx={{
                                    '& > div': {
                                        '& > input': {
                                            p: '12px 5px 12px 20px',
                                        },
                                        '& > fieldset': {
                                            border: 'none',
                                        },
                                    },
                                }}
                            />
                            <Button
                                fullWidth
                                sx={{
                                    width: '140px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    p: '23.5px 24px !important',
                                    borderRadius: '44px',
                                    bgcolor: '#ccc',
                                }}>
                                Gửi mã
                            </Button>
                        </Box>
                    </FormContainer>
                ) : (
                    <FormContainer defaultValues={{ email: '', password: '' }}>
                        <TextFieldElement
                            name="phone"
                            required
                            placeholder="Địa chỉ email"
                            fullWidth
                            sx={{
                                '& > div': {
                                    borderRadius: '44px',
                                    '& > input': {
                                        p: '12px 5px 12px 20px',
                                    },
                                    '& > fieldset': {
                                        border: '1px solid #ccc',
                                    },
                                },
                                my: 1,
                            }}
                        />
                        <br />
                        <TextFieldElement
                            name="password"
                            required
                            placeholder="Mật khẩu"
                            fullWidth
                            sx={{
                                '& > div': {
                                    borderRadius: '44px',
                                    '& > input': {
                                        p: '12px 5px 12px 20px',
                                    },
                                    '& > fieldset': {
                                        border: '1px solid #ccc',
                                    },
                                },
                            }}
                        />
                    </FormContainer>
                )}
                <Button
                    fullWidth
                    sx={{
                        mt: 3,
                        p: '8px 16px',
                        bgcolor: '#1dbfaf',
                        backgroundImage: 'linear-gradient(70.06deg, #2cccff -5%, #22dfbf 106%)',
                        borderRadius: '44px',
                        color: '#fff',
                    }}>
                    Đăng nhập
                </Button>
            </Box>
        </Box>
    );
}

export default FormLogin;
