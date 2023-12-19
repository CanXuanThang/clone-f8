import { Box, Button, IconButton, Typography } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCourseTypeAll } from '@src/modules/module-global/api/Course';
import { TableBaseProps } from '@src/modules/module-base/constants';
import TableBase from '@src/modules/module-base/components/TableBase';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteCourseType } from '../../apis/Course';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import DialogAddCourseType from './DialogAddCourseType';
import { useNavigate } from 'react-router-dom';
import { SCREEN_ADMIN } from '../../constants';

interface Data {
    id: number;
    code: string;
    name: string;
    action: any;
}

function Category() {
    const [open, setOpen] = useState<boolean>(false);

    const dispatch = useDispatch();
    const column: TableBaseProps<Data>['rows'] = [
        {
            id: 'id',
            label: 'ID',
            render: (item) => (
                <Typography variant="caption" sx={{ textTransform: 'uppercase' }}>
                    {item.id}
                </Typography>
            ),
        },
        {
            id: 'code',
            label: 'Code',
            render: (item) => (
                <Typography variant="caption" sx={{ textTransform: 'uppercase' }}>
                    {item.code}
                </Typography>
            ),
        },
        {
            id: 'name',
            label: 'Tên khóa học',
            render: (item) => (
                <Typography variant="caption" sx={{ textTransform: 'uppercase' }}>
                    {item.name}
                </Typography>
            ),
        },
        {
            id: 'action',
            label: '',
            render: (item) => (
                <IconButton color="error" onClick={() => deleteType.mutate({ data: { id: item.id } })}>
                    <DeleteIcon />
                </IconButton>
            ),
        },
    ];
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['getCourseTypeAdmin'],
        queryFn: () => getCourseTypeAll({}),
        enabled: false,
    });

    const deleteType = useMutation({
        mutationFn: deleteCourseType,
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

    useEffect(() => {
        refetch().then();
    }, []);

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h3" mb={4}>
                    Danh mục
                </Typography>
                <Button color="info" variant="contained" onClick={() => setOpen(true)}>
                    Thêm khóa học
                </Button>
            </Box>
            <TableBase
                rows={column}
                data={data?.data}
                loading={isLoading || deleteType.isLoading}
                sx={{ minWidth: '550px', overflow: 'hidden' }}
            />
            <DialogAddCourseType open={open} setOpen={setOpen} onRefesh={() => refetch().then()} />
        </Box>
    );
}

export default Category;
