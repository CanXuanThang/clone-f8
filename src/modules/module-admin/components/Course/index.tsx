import { Box, Button } from '@mui/material';
import { IconButton, Typography } from '@mui/material';
import TableBase from '@src/modules/module-base/components/TableBase';
import { TableBaseProps } from '@src/modules/module-base/constants';
import { getCourseAll } from '@src/modules/module-global/api/Course';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import ChecklistIcon from '@mui/icons-material/Checklist';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteCourseApi } from '../../apis/Course';
import { useDispatch } from 'react-redux';
import BreakCrumbBase from '@src/modules/module-base/components/BreakCrumbBase';
import { SCREEN_ADMIN } from '../../constants';
import DialogAddCourse from './DialogAddCourse';
import { useNavigate } from 'react-router-dom';
import { DataCourse } from '@src/modules/module-global/models/apis/Course';

interface Data {
    id: number;
    code: string | null;
    name: string;
    price: number;
    totalBuy: number;
    discount: number;
    description: string;
}

function Course() {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const [open, setOpen] = useState<boolean>(false);

    const column: TableBaseProps<Data>['rows'] = [
        {
            id: 'id',
            label: 'ID',
            render: (item) => <Typography variant="caption">{item.id}</Typography>,
        },
        {
            id: 'code',
            label: 'Code',
            render: (item) => item.code,
        },
        {
            id: 'name',
            label: 'Tên khóa học',
            render: (item) => <Typography variant="caption">{item.name}</Typography>,
        },
        {
            id: 'description',
            label: 'Mô tả',
            render: (item) => <Typography variant="caption">{item.description}</Typography>,
        },
        {
            id: 'price',
            label: 'Giá',
            render: (item) => item.price,
        },
        {
            id: 'discount',
            label: 'Giảm giá',
            render: (item) => item.discount,
        },
        {
            id: 'totalBuy',
            label: 'Số lượng đã mua',
            render: (item) => item.totalBuy,
        },
        {
            id: 'action',
            label: '',
            render: (item) => (
                <Box display="flex" flexDirection="row">
                    <IconButton color="info" onClick={() => {}} title="Xem danh sách bài học">
                        <ChecklistIcon aria-label="asdsd" />
                    </IconButton>
                    <IconButton color="error" onClick={() => deleteCourse.mutate({ data: { id: item.id } })} title="Xóa">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
        },
    ];

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['getListCourse'],
        queryFn: () => getCourseAll({}),
    });

    useEffect(() => {
        refetch().then();
    }, []);

    const deleteCourse = useMutation({
        mutationFn: deleteCourseApi,
        onSuccess: (response) => {
            let mode;
            let message;

            if (response?.code === '200') {
                refetch().then();
                mode = 'success';
                message = 'Xóa thành công';
            } else {
                mode = 'error';
                message = 'Xóa thất bại';
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

    const handleClick = (item: DataCourse) => {
        navigation(SCREEN_ADMIN.LESSONS.replace('/:courseId', `/${item.id}`));
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h3" mb={4} mt={2}>
                    Danh sách khóa học
                </Typography>
                <Button color="info" variant="contained" onClick={() => setOpen(true)}>
                    Thêm khóa học
                </Button>
            </Box>
            <TableBase
                rows={column}
                data={data?.data.data}
                loading={isLoading || deleteCourse.isLoading}
                onClickItem={handleClick}
            />
            <DialogAddCourse open={open} setOpen={setOpen} onRefesh={() => refetch().then()} />
        </Box>
    );
}

export default Course;
