import { LoadingButton } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import DialogBase from '@src/modules/module-base/components/DialogBase';
import FormControlInput from '@src/modules/module-base/components/react-hook-form-mui-base/FormControlInput';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { addCourseType } from '../../apis/Course';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

type Data = {
    id: number;
    code: string;
    name: string;
    action: any;
};

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    onRefesh: () => void;
    data?: Data;
}

const defaultValue = {
    code: '',
    name: '',
};

function DialogUpdateType({ open, setOpen, onRefesh, data }: Props) {
    const { control, handleSubmit, reset } = useForm<Data>({
        defaultValues: defaultValue,
    });

    const dispatch = useDispatch();

    const mutation = useMutation({
        mutationFn: addCourseType,
        onSuccess: (res) => {
            let mode;
            let message;
            if (res?.code === '200') {
                mode = 'success';
                message = 'Sửa thành công';
                setOpen(false);
                reset();
                onRefesh();
            } else {
                mode = 'error';
                message = 'Sửa thất bại';
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
        mutation.mutate({ data: { id: data?.id, code: formData.code, name: formData.name } });
    };

    useEffect(() => {
        if (data) {
            reset({ code: data.code, name: data.name });
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
                        name="code"
                        label="Mã khóa học"
                        control={control}
                        required
                        rules={{
                            required: 'Bạn cần nhập mã khóa học',
                            validate: {
                                value: (value) => !!value || 'Bạn cần nhập mã khóa học',
                            },
                        }}
                    />
                    <FormControlInput
                        name="name"
                        label="Tên khóa học"
                        control={control}
                        required
                        rules={{
                            required: 'Bạn cần nhập tên khóa học',
                            validate: {
                                value: (value) => !!value || 'Bạn cần nhập tên khóa học',
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

export default DialogUpdateType;
