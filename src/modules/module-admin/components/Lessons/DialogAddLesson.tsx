import { LoadingButton } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import DialogBase from '@src/modules/module-base/components/DialogBase';
import FormControlInput from '@src/modules/module-base/components/react-hook-form-mui-base/FormControlInput';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { addLessonApi } from '../../apis/Course';
import { useDispatch } from 'react-redux';
import { getCourseTypeAll } from '@src/modules/module-global/api/Course';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    onRefesh: () => void;
}

type Lesson = {
    courseId: number;
    code: any;
    description: string;
    embeddedLink: string;
    name: string;
};

function DialogAddLesson({ open, setOpen, onRefesh }: Props) {
    const { control, handleSubmit, reset, setValue, watch } = useForm<Lesson>();
    const dispatch = useDispatch();
    const param = useParams();

    const mutation = useMutation({
        mutationFn: addLessonApi,
        onSuccess: (res) => {
            let mode;
            let message;

            if (res?.code === '200') {
                mode = 'success';
                message = 'Thêm bài học thành công';
                setOpen(false);
                reset();
                onRefesh();
            } else {
                mode = 'error';
                message = 'Thêm bài học thất bại';
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

    useEffect(() => {
        setValue('code', data?.data.find((item) => Number(param.courseId) === item.id)?.code);
    }, [watch('courseId')]);

    console.log(data);

    console.log(watch('code'));

    const onSubmit = (formData: Lesson) => {
        mutation.mutate({
            data: {
                code: watch('code'),
                name: formData.name,
                course: { id: Number(param.courseId) },
                description: formData.description,
                embeddedLink: formData.embeddedLink,
            },
        });
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
                        label="Tên bài học"
                        control={control}
                        required
                        rules={{
                            required: 'Bạn cần nhập tên bài học',
                            validate: {
                                value: (value) => !!value.trim() || 'Bạn cần nhập tên bài học',
                            },
                        }}
                    />
                    <FormControlInput
                        name="description"
                        label="Mô tả"
                        control={control}
                        required
                        rules={{
                            required: 'Bạn cần nhập mô tả của bài học',
                            validate: {
                                value: (value) => !!value.trim() || 'Bạn cần nhập mô tả của bài học',
                            },
                        }}
                    />
                    <FormControlInput
                        name="price"
                        label="Đường dẫn"
                        control={control}
                        required
                        rules={{
                            required: 'Bạn cần nhập đường dẫn của bài học',
                            validate: {
                                value: (value) => !!value.trim() || 'Bạn cần nhập đường dẫn của bài học',
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

export default DialogAddLesson;
