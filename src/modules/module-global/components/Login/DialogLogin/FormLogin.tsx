import { LoadingButton } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import TexFieldElementBase from '@src/modules/module-base/components/react-hook-form-mui-base/TextFiledElementBase';
import { accessToken } from '@src/modules/module-base/constants';
import { loginApi } from '@src/modules/module-global/api/Auth';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import { useState } from 'react';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

type FormLoginState = {
    username: string;
    password: string;
};

function FormLogin() {
    const [typeLogin, setTypeLogin] = useState<string>('phone');

    // const mutation = useMutation({
    //     mutationFn: loginApi,
    //     onSuccess: (response) => {
    //         if (response?.status === 200) {
    //             Cookies.set(accessToken, response.data.access_token, { expires: 1 });
    //         }
    //     },
    // });

    const onSubmit = React.useCallback(
        (data: FormLoginState) =>
            axios.post('http://localhost:8090/ndz/oauth/token', {
                username: data.username,
                password: data.password,
            }),
        []
    );

    return (
        <Box width="100%" px={12}>
            {/* <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
            </Box> */}
            <Box>
                {/* {typeLogin === 'phone' ? (
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
                ) : ( */}
                <FormContainer
                    defaultValues={{ username: '', password: '' }}
                    onSuccess={onSubmit}
                    mode="onChange"
                    reValidateMode="onChange">
                    <TextFieldElement
                        name="username"
                        required
                        placeholder="Tên đăng nhập"
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
                    <LoadingButton
                        fullWidth
                        // loading={mutation.is}
                        type="submit"
                        sx={{
                            mt: 3,
                            p: '8px 16px',
                            bgcolor: '#1dbfaf',
                            backgroundImage: 'linear-gradient(70.06deg, #2cccff -5%, #22dfbf 106%)',
                            borderRadius: '44px',
                            color: '#fff',
                        }}>
                        Đăng nhập
                    </LoadingButton>
                </FormContainer>
                {/* )} */}
            </Box>
        </Box>
    );
}

export default FormLogin;
