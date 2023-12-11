import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import FormControlInput from '@module-base/components/react-hook-form-mui-base/FormControlInput';
import { useMutation } from '@tanstack/react-query';
import { registerApi } from '@src/modules/module-global/api/Auth';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { LoadingButton } from '@mui/lab';

type FormData = {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
};

interface Props {
    setType: (value: string) => void;
}
const formData: FormData = { displayName: '', email: '', password: '', confirmPassword: '', username: '' };

function DialogRegister({ setType }: Props) {
    const dispatch = useDispatch();
    const { control, watch, handleSubmit } = useForm({
        defaultValues: formData,
    });

    const confirmPassword = watch('password');

    const mutation = useMutation({
        mutationFn: registerApi,
        onSuccess: (res) => {
            let message;
            let mode;
            if (res?.status === 200) {
                mode = 'success';
                message = 'Đăng ký tài khoản thành công';
                setType('login');
            } else {
                mode = 'error';
                message = 'Đăng ký tài khoản thất bại';
            }
            return dispatch({
                type: 'notify',
                payload: {
                    mode: mode,
                    message: message,
                },
            });
        },
    });

    const onSubmit = useCallback(
        (formData: FormData) =>
            mutation.mutate({
                data: {
                    displayName: formData.displayName,
                    confirmPassword: formData.confirmPassword,
                    email: formData.email,
                    password: formData.password,
                    username: formData.username,
                },
            }),
        []
    );

    return (
        <Box width="100%" px={10} component={'form'} onSubmit={handleSubmit(onSubmit)}>
            <Box>
                <FormControlInput
                    label="Họ và tên của bạn"
                    control={control}
                    name="displayName"
                    required
                    rules={{
                        required: 'Bạn cần nhập họ và tên',
                        validate: {
                            value: (value) => !!value.trim() || 'Bạn cần nhập họ và tên',
                        },
                    }}
                />
                <FormControlInput
                    label="Tên đăng nhập"
                    control={control}
                    name="username"
                    required
                    rules={{
                        required: 'Bạn cần nhập tên đăng nhập',
                        validate: {
                            value: (value) => !!value.trim() || 'Bạn cần nhập tên đăng nhập',
                        },
                    }}
                />
                <FormControlInput
                    label="Email"
                    control={control}
                    name="email"
                    type="email"
                    required
                    rules={{
                        required: 'Bạn cần nhập email',
                        validate: {
                            value: (value) => !!value.trim() || 'Bạn cần nhập email',
                        },
                    }}
                />
                <FormControlInput
                    label="Mật khẩu"
                    control={control}
                    name="password"
                    required
                    type="password"
                    rules={{
                        required: 'Bạn cần nhập mật khẩu',
                        validate: {
                            value: (value) => !!value.trim() || 'Bạn cần nhập mật khẩu',
                        },
                    }}
                />
                <FormControlInput
                    label="Nhập lại mật khẩu"
                    control={control}
                    name="confirmPassword"
                    required
                    type="password"
                    rules={{
                        required: 'Bạn cần nhập nhập lại mật khẩu',
                        validate: {
                            value: (value) => value === confirmPassword || 'Mật khẩu không khớp',
                        },
                    }}
                />
            </Box>
            <LoadingButton
                fullWidth
                loading={mutation.isLoading}
                type="submit"
                sx={{
                    mt: 3,
                    p: '8px 16px',
                    bgcolor: '#1dbfaf',
                    backgroundImage: 'linear-gradient(70.06deg, #2cccff -5%, #22dfbf 106%)',
                    borderRadius: '44px',
                    color: '#fff',
                }}>
                Đăng ký
            </LoadingButton>
        </Box>
    );
}

export default DialogRegister;
