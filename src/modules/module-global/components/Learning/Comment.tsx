import { ListItem } from '@mui/material';
import { Box, List, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById, setEvaluateApi } from '../../api/Course';
import { useDispatch } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import FormControlInput from '@src/modules/module-base/components/react-hook-form-mui-base/FormControlInput';

type FormData = {
    courseId: number;
    content: string;
};

function Comment() {
    const param = useParams();
    const dispatch = useDispatch();
    const { control, reset, handleSubmit } = useForm<FormData>({});

    const setEvaluate = useMutation({
        mutationFn: setEvaluateApi,
        onSuccess: (res) => {
            let message;
            let mode;
            if (res?.code === '200') {
                mode = 'success';
                message = 'Đánh giá thành công';
                reset();
                mutation.mutate({ data: { id: Number(param.courseId) } });
            }
            if (res?.code === '400') {
                mode = 'error';
                message = 'Đánh giá thất bại';
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

    const mutation = useMutation({
        mutationFn: getCourseById,
    });

    const onSubmit = (data: FormData) => {
        setEvaluate.mutate({ data: { courseId: Number(param.courseId), content: data.content } });
    };

    useEffect(() => {
        mutation.mutate({ data: { id: Number(param.courseId) } });
    }, [param.courseId]);

    return (
        <Box mx={8} my={4}>
            <Box maxHeight="400px" overflow="auto">
                <Typography variant="h5">Bình luận</Typography>
                <List>
                    {mutation.data?.data ? (
                        mutation.data.data.evaluates.map((item) => (
                            <ListItem alignItems="flex-start" sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ fontWeight: 600, mb: 1 }}>{item.buyer}</Typography>
                                <Typography>{item.content}</Typography>
                            </ListItem>
                        ))
                    ) : (
                        <Typography>Chưa có bình luận nào</Typography>
                    )}
                </List>
            </Box>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <FormControlInput
                    name="content"
                    control={control}
                    placeholder="Bình luận của bạn ..."
                    required
                    rules={{
                        required: 'Bạn cần nhập tên khóa học',
                        validate: {
                            value: (value) => !!value.trim() || 'Bạn cần nhập tên khóa học',
                        },
                    }}
                />
                <LoadingButton
                    loading={setEvaluate.isLoading}
                    type="submit"
                    fullWidth
                    sx={{
                        p: '8px 16px',
                        width: '80px',
                        ml: 3,
                        bgcolor: '#ff8f26',
                        borderRadius: '44px',
                        color: '#fff',
                        minWidth: '122px',
                    }}>
                    Bình luận
                </LoadingButton>
            </Box>
        </Box>
    );
}

export default Comment;
