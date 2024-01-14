import { LoadingButton } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import DialogBase from '@src/modules/module-base/components/DialogBase';
import FormControlInput from '@src/modules/module-base/components/react-hook-form-mui-base/FormControlInput';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { addCourseApi, addCourseType, addImage } from '../../apis/Course';
import { useDispatch } from 'react-redux';
import FormControlSelect from '@src/modules/module-base/components/react-hook-form-mui-base/FormControlSelector';
import { getCourseTypeAll } from '@src/modules/module-global/api/Course';
import { useEffect } from 'react';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    onRefesh: () => void;
}

type DataCourse = {
    code: string;
    name: string;
    courseType: any;
    description: string;
    shortDescription: string;
    price: number;
    discount: number;
    image: File;
};

function DialogAddCourse({ open, setOpen, onRefesh }: Props) {
    const { control, handleSubmit, reset, setValue, watch } = useForm<DataCourse>({});
    const dispatch = useDispatch();

    const mutation = useMutation({
        mutationFn: addCourseApi,
        onSuccess: (res) => {
            if (res?.code === '200') {
                addImageApi.mutate({ data: { id: res.data.id, image: watch('image') } });
            }
        },
    });
    const addImageApi = useMutation({
        mutationFn: addImage,
        onSuccess: (res) => {
            let mode;
            let message;

            if (res?.data.code === '200') {
                mode = 'success';
                message = 'Thêm khóa học thành công';
                setOpen(false);
                reset();
                onRefesh();
            } else {
                mode = 'error';
                message = 'Thêm khóa học thất bại';
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

    const { data, refetch } = useQuery({
        queryKey: ['getCourseTypeAdmin'],
        queryFn: () => getCourseTypeAll({}),
        enabled: false,
    });

    useEffect(() => {
        refetch().then();
    }, []);

    const onSubmit = (formData: DataCourse) => {
        mutation.mutate({
            data: {
                code: formData.code,
                name: formData.name,
                courseType: { id: formData.courseType },
                description: formData.description,
                shortDescription: formData.shortDescription,
                price: formData.price,
                discount: formData.discount ? formData.discount : 1,
            },
        });
    };

    return (
        <DialogBase
            open={open}
            displayWitdh="sm"
            setOpen={setOpen}
            textTitle={<Typography variant="h4">Thêm danh mục</Typography>}
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
                        name="code"
                        label="Mã khóa học"
                        control={control}
                        required
                        rules={{
                            required: 'Bạn cần nhập mã khóa học',
                            validate: {
                                value: (value) => !!value.trim() || 'Bạn cần nhập mã khóa học',
                            },
                        }}
                    />
                    <FormControlSelect
                        label="Danh mục"
                        name="courseType"
                        control={control}
                        rules={{
                            required: 'Bạn cần chọn danh mục',
                        }}
                        data={data?.data}
                        placeholder="Danh mục"
                        required
                        renderLabelItem={(item) => item.name}
                        renderValueItem={(item) => item.id}
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
                        type="number"
                        rules={{
                            required: 'Bạn cần nhập giá của khóa học',
                            validate: {
                                value: (value) => !!value.trim() || 'Bạn cần nhập giá của khóa học',
                            },
                        }}
                    />
                    <FormControlInput name="discount" label="Giảm giá" type="number" control={control} required={false} />

                    <input type="file" required onChange={(e) => e.target.files && setValue('image', e.target.files[0])} />

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
