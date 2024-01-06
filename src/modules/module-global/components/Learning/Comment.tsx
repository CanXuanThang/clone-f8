import { Avatar, Button, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Box, List, Typography } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { useParams } from 'react-router-dom';
import { getCourseAll, getCourseById, setEvaluateApi } from '../../api/Course';
import { useDispatch } from 'react-redux';
import { LoadingButton } from '@mui/lab';

type FormData = {
    courseId: number;
    numberStar: number;
    content: string;
};

function Comment() {
    const param = useParams();
    const dispatch = useDispatch();

    const setEvaluate = useMutation({
        mutationFn: setEvaluateApi,
        onSuccess: (res) => {
            let message;
            let mode;
            if (res?.code === '200') {
                mode = 'success';
                message = 'Đánh giá thành công';
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

    const onSubmit = React.useCallback(
        (data: FormData) => setEvaluate.mutate({ data: { courseId: Number(param.courseId), content: data.content } }),
        []
    );

    useEffect(() => {
        mutation.mutate({ data: { id: Number(param.courseId) } });
    }, [param.courseId]);

    return (
        <Box mx={8} maxHeight="500px" my={4}>
            <Typography variant="h5">Bình luận</Typography>
            <List>
                {mutation.data?.data ? (
                    mutation.data.data.evaluates.map((item) => (
                        <ListItem alignItems="flex-start">
                            <Typography>{item.content}</Typography>
                        </ListItem>
                    ))
                ) : (
                    <Typography>Chưa có bình luận nào</Typography>
                )}
            </List>
            <FormContainer onSuccess={onSubmit} mode="onChange" reValidateMode="onChange">
                <Box display="flex" alignItems="center" maxWidth="30%">
                    <TextFieldElement
                        name="content"
                        required
                        placeholder="Bình luận của bạn ..."
                        sx={{
                            minWidth: '300px',
                            '& > div': {
                                borderRadius: '44px',
                                '& > input': {
                                    p: '12px 5px 12px 20px',
                                    width: '200px',
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
            </FormContainer>
        </Box>
    );
}

export default Comment;
