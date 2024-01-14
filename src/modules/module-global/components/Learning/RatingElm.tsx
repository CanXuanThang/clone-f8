import { Box, Rating, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setEvaluateApi } from '../../api/Course';
import { useParams } from 'react-router-dom';
import { DataCourse } from '../../models/apis';

interface Props {
    data?: DataCourse;
    onRefetch: () => void;
}

function RatingElm({ data, onRefetch }: Props) {
    const dispatch = useDispatch();
    const param = useParams();

    const setEvaluate = useMutation({
        mutationFn: setEvaluateApi,
        onSuccess: (res) => {
            let message;
            let mode;
            if (res?.code === '200') {
                mode = 'success';
                message = 'Đánh giá thành công';
                onRefetch();
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
    return (
        <Box mx={8} my={4} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5">Đáng giá khóa học</Typography>
            <Rating
                sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
                name="simple-controlled"
                value={data?.rating}
                onChange={(e, newValue) =>
                    setEvaluate.mutate({ data: { courseId: Number(param.courseId), numberStar: Number(newValue) } })
                }
            />
        </Box>
    );
}

export default RatingElm;
