import { LoadingButton } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import DialogBase from '@src/modules/module-base/components/DialogBase';
import FormControlInput from '@src/modules/module-base/components/react-hook-form-mui-base/FormControlInput';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { addCourseType, addImage } from '../../apis/Course';
import { useDispatch } from 'react-redux';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    onRefesh: () => void;
}

type DataCourse = {
    code: string;
    name: string;
    codeType: {
        id: number;
    };
    description: string;
    shortDescription: string;
    price: number;
    status: number;
    discount: number;
};

function DialogAddCourse({ open, setOpen, onRefesh }: Props) {
    const { control, handleSubmit, reset } = useForm<DataCourse>();
    const dispatch = useDispatch();

    const mutation = useMutation({
        mutationFn: addCourseType,
        onSuccess: (res) => {
            let mode;
            let message;
            if (res?.code === '200') {
                mode = 'success';
                message = 'Thêm danh sách khóa học thành công';
                setOpen(false);
                reset();
                onRefesh();
            } else {
                mode = 'error';
                message = 'Thêm danh sách khóa học thất bại';
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
    const addImageApi = useMutation({
        mutationFn: addImage,
        onSuccess: (res) => {
            let mode;
            let message;
            if (res?.code === '200') {
                mode = 'success';
                message = 'Thêm danh sách khóa học thành công';
                setOpen(false);
                reset();
                onRefesh();
            } else {
                mode = 'error';
                message = 'Thêm danh sách khóa học thất bại';
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

    const onSubmit = (formData: DataCourse) => {
        mutation.mutate({ data: { code: formData.code, name: formData.name } });
    };
    return (
        <DialogBase
            open={open}
            displayWitdh="sm"
            setOpen={setOpen}
            textTitle={<Typography variant="h4">Thêm khóa học</Typography>}
            contentText={
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <FormControlInput
                        name="name"
                        label="Tên khóa học"
                        control={control}
                        required
                        rules={{
                            required: 'Bạn cần nhập tên khóa học',
                            validate: {
                                value: (value) => !!value.trim() || 'Bạn cần nhập tên khóa học',
                            },
                        }}
                    />
                    <FormControlInput
                        name="description"
                        label="Mô tả"
                        control={control}
                        required
                        rules={{
                            required: 'Bạn cần nhập mô tả khóa học',
                            validate: {
                                value: (value) => !!value.trim() || 'Bạn cần nhập mô tả khóa học',
                            },
                        }}
                    />
                    <FormControlInput name="shortDescription" label="Mô tả ngắn" control={control} required={false} />
                    <FormControlInput
                        name="price"
                        label="Giá"
                        control={control}
                        required
                        rules={{
                            required: 'Bạn cần nhập giá của khóa học',
                            validate: {
                                value: (value) => !!value.trim() || 'Bạn cần nhập giá của khóa học',
                            },
                        }}
                    />
                    <FormControlInput name="discount" label="Giảm giá" control={control} required={false} />
                    <FormControlInput
                        name="status"
                        label="Trạng thái"
                        control={control}
                        required
                        rules={{
                            required: 'Bạn cần nhập trạng thái khóa học',
                            validate: {
                                value: (value) => !!value.trim() || 'Bạn cần nhập trạng thái khóa học',
                            },
                        }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <LoadingButton
                            sx={{ bgcolor: '#ff8f26', borderRadius: '99px', p: '9px 36px', mr: 2, color: '#fff' }}
                            loading={mutation.isLoading || addImageApi.isLoading}
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

export default DialogAddCourse;
