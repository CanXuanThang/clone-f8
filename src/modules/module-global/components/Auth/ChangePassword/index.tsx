import { Box, Button, ListItemIcon, Typography } from '@mui/material';
import DialogBase from '@src/modules/module-base/components/DialogBase';
import LockResetIcon from '@mui/icons-material/LockReset';
import { useState } from 'react';
import FormControlInput from '@src/modules/module-base/components/react-hook-form-mui-base/FormControlInput';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { AppState } from '@src/modules/module-global/redux';
import Cookies from 'js-cookie';
import { username } from '@src/modules/module-base/constants';
import { useMutation } from '@tanstack/react-query';

type FormData = {
    username: string;
    oldPassword: string;
    password: string;
    confirmPassword: string;
};

function ChangePassword() {
    const [open, setOpen] = useState<boolean>(false);
    const getUserName = useSelector((state: AppState) => state.profile.auth.username);
    const formData: FormData = {
        username: getUserName ? getUserName : Cookies.get(username),
        oldPassword: '',
        password: '',
        confirmPassword: '',
    };

    const { control, handleSubmit, watch } = useForm<FormData>({ defaultValues: formData });
    const isConfirm = watch('password');

    // const mutation = useMutation({
    //     mutationFn:
    // })

    const onSubmit = (formData: FormData) => console.log(formData);

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
                        <>
                            <Button
                                variant="contained"
                                sx={{ bgcolor: '#ff8f26', borderRadius: '99px', p: '9px 36px' }}
                                type="submit">
                                Đồng ý
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                sx={{ borderRadius: '99px', p: '9px 36px' }}
                                onClick={() => setOpen(false)}>
                                Hủy bỏ
                            </Button>
                        </>
                    </Box>
                }
                // contentFooter={

                // }
            />
        </Box>
    );
}

export default ChangePassword;
