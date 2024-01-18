import { LoadingButton } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import DialogBase from '@src/modules/module-base/components/DialogBase';
import FormControlInput from '@src/modules/module-base/components/react-hook-form-mui-base/FormControlInput';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { DataRegister } from '@src/modules/module-global/models/apis';
import { updateUserApi } from '@src/modules/module-global/api/Auth';

type Data = {
    id?: number;
    displayName: string;
    email: string;
    phoneNumber: string;
};

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    onRefesh: () => void;
    data?: DataRegister;
}

function DialogUpdateInfo({ open, setOpen, onRefesh, data }: Props) {
    const { control, handleSubmit, reset } = useForm<Data>();

    const dispatch = useDispatch();

    const mutation = useMutation({
        mutationFn: updateUserApi,
        onSuccess: (res) => {
            let mode;
            let message;
            if (res?.code === '200') {
                mode = 'success';
                message = 'Cập nhật thông tin thành công';
                setOpen(false);
                reset();
                onRefesh();
            } else {
                mode = 'error';
                message = 'Cập nhật thông tin thất bại';
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

    const onSubmit = (formData: Data) => {
        data &&
            mutation.mutate({
                data: {
                    id: data.id,
                    displayName: formData.displayName,
                    email: formData.email,
                    phoneNumber: formData.phoneNumber,
                },
            });
    };

    useEffect(() => {
        if (data) {
            reset({ id: data.id, displayName: data.displayName, email: data.email, phoneNumber: data.phoneNumber });
        }
    }, [data]);

    return (
        <DialogBase
            open={open}
            displayWitdh="sm"
            setOpen={setOpen}
            textTitle={<Typography variant="h4">Sửa danh mục</Typography>}
            contentText={
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <FormControlInput
                        name="displayName"
                        label="Tên của bạn"
                        control={control}
                        required
                        rules={{
                            required: 'Bạn cần nhập tên của bạn',
                            validate: {
                                value: (value) => !!value.trim() || 'Bạn cần nhập tên của bạn',
                            },
                        }}
                    />
                    <FormControlInput
                        name="email"
                        label="Email"
                        control={control}
                        required
                        type="email"
                        rules={{
                            required: 'Bạn cần nhập email của bạn',
                            validate: {
                                value: (value) => !!value.trim() || 'Bạn cần nhập email của bạn',
                            },
                        }}
                    />
                    <FormControlInput
                        name="phoneNumber"
                        label="Số điện thoại"
                        control={control}
                        required
                        rules={{
                            required: 'Bạn cần nhập số điện thoại',
                            validate: {
                                value: (value) => !!value.trim() || 'Bạn cần nhập số điện thoại',
                            },
                        }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <LoadingButton
                            sx={{ bgcolor: '#ff8f26', borderRadius: '99px', p: '9px 36px', mr: 2, color: '#fff' }}
                            loading={mutation.isLoading}
                            type="submit">
                            Đồng ý
                        </LoadingButton>
                        <Button
                            variant="contained"
                            color="error"
                            sx={{ borderRadius: '99px', p: '9px 36px' }}
                            onClick={() => setOpen(false)}>
                            Hủy bỏ
                        </Button>
                    </Box>
                </Box>
            }
        />
    );
}

export default DialogUpdateInfo;
