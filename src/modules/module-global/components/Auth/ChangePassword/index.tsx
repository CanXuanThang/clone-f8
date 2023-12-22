import { Box, Button, ListItemIcon, Typography } from '@mui/material';
import DialogBase from '@src/modules/module-base/components/DialogBase';
import LockResetIcon from '@mui/icons-material/LockReset';
import { useState } from 'react';
import FormControlInput from '@src/modules/module-base/components/react-hook-form-mui-base/FormControlInput';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@src/modules/module-global/redux';
import Cookies from 'js-cookie';
import { username } from '@src/modules/module-base/constants';
import { useMutation } from '@tanstack/react-query';
import { changePasswordApi } from '@src/modules/module-global/api/Auth';
import { LoadingButton } from '@mui/lab';

type FormData = {
    username: string | undefined;
    oldPassword: string;
    password: string;
    confirmPassword: string;
};

function ChangePassword() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);
    const formData: FormData = {
        username: Cookies.get(username),
        oldPassword: '',
        password: '',
        confirmPassword: '',
    };

    const { control, handleSubmit, watch, reset } = useForm<FormData>();
    const isConfirm = watch('password');

    const mutation = useMutation({
        mutationFn: changePasswordApi,
        onSuccess: (res) => {
            let mode;
            let message;
            if (res?.code === '200') {
                mode = 'success';
                message = 'Đổi mật khẩu thành công';
                setOpen(false);
                reset();
            } else {
                mode = 'error';
                message = 'Mật khẩu của bạn không đúng!';
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

    const onSubmit = (formData: FormData) =>
        Cookies.get(username) &&
        mutation.mutate({
            data: {
                username: Cookies.get(username),
                oldPassword: formData.oldPassword,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
            },
        });

    return (
        <Box>
            <Button
                onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                }}>
                <ListItemIcon>
                    <LockResetIcon fontSize="small" />
                </ListItemIcon>
                Thay đổi mật khẩu
            </Button>
            <DialogBase
                open={open}
                displayWitdh="sm"
                setOpen={setOpen}
                textTitle={<Typography>Thay đổi mật khẩu</Typography>}
                contentText={
                    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                        <FormControlInput
                            name="oldPassword"
                            label="Mật khẩu cũ"
                            control={control}
                            type="password"
                            required
                            rules={{
                                required: 'Bạn cần nhập mật khẩu cũ',
                                validate: {
                                    value: (value) => !!value.trim() || 'Bạn cần nhập mật khẩu cũ',
                                },
                            }}
                        />
                        <FormControlInput
                            name="password"
                            label="Mật khẩu mới"
                            control={control}
                            type="password"
                            required
                            rules={{
                                required: 'Bạn cần nhập mật khẩu mới',
                                validate: {
                                    value: (value) => !!value.trim() || 'Bạn cần nhập mật khẩu mới',
                                },
                            }}
                        />
                        <FormControlInput
                            name="confirmPassword"
                            label="Xác nhận mật khẩu"
                            control={control}
                            type="password"
                            required
                            rules={{
                                required: 'Bạn cần xác nhận mật khẩu',
                                validate: {
                                    value: (value) => value === isConfirm || 'Nhập lại mật khẩu không đúng',
                                },
                            }}
                        />
                        <Box textAlign="end">
                            <LoadingButton
                                variant="contained"
                                loading={mutation.isLoading}
                                sx={{ bgcolor: '#ff8f26', borderRadius: '99px', p: '9px 36px' }}
                                type="submit">
                                Đồng ý
                            </LoadingButton>
                            <Button
                                variant="contained"
                                color="error"
                                sx={{ borderRadius: '99px', p: '9px 36px', ml: 1 }}
                                onClick={() => {
                                    setOpen(false);
                                    reset();
                                }}>
                                Hủy bỏ
                            </Button>
                        </Box>
                    </Box>
                }
            />
        </Box>
    );
}

export default ChangePassword;
