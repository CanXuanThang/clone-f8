import { Box, Button, IconButton, Typography } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCourseTypeAll } from '@src/modules/module-global/api/Course';
import { TableBaseProps } from '@src/modules/module-base/constants';
import TableBase from '@src/modules/module-base/components/TableBase';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteCourseType } from '../../apis/Course';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { DataCourse, DataRegister } from '@src/modules/module-global/models/apis';
import { TAdminGet } from '../../models';
import { approveBillApi, deleteBillApi, getBillApi } from '../../apis/Bill';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DialogApprove from './DialogApprove';

function Bill() {
    const [open, setOpen] = useState<boolean>(false);
    const [id, setId] = useState<number>();

    const dispatch = useDispatch();
    const column: TableBaseProps<TAdminGet>['rows'] = [
        {
            id: 'id',
            label: 'ID',
            render: (item) => <Typography variant="caption">{item.id}</Typography>,
        },
        {
            id: 'code',
            label: 'Code',
            render: (item) => <Typography variant="caption">{item.course.code}</Typography>,
        },
        {
            id: 'name',
            label: 'Tên khóa học',
            render: (item) => <Typography variant="caption">{item.course.name}</Typography>,
        },
        {
            id: 'username',
            label: 'Tên user',
            render: (item) => <Typography variant="caption">{item.buyUser.username}</Typography>,
        },
        {
            id: 'email',
            label: 'Email',
            render: (item) => <Typography variant="caption">{item.buyUser.email}</Typography>,
        },
        {
            id: 'totalBill',
            label: 'Tổng hóa đơn',
            render: (item) => <Typography variant="caption">{item.totalBill}</Typography>,
        },
        {
            id: 'action',
            label: '',
            render: (item) => (
                <>
                    <IconButton
                        color="success"
                        onClick={() => {
                            setOpen(true);
                            setId(item.id);
                        }}>
                        <CheckCircleOutlineIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => deleteBill.mutate({ data: { id: item.id } })}>
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        },
    ];

    const getBill = useMutation({
        mutationFn: getBillApi,
    });

    const deleteBill = useMutation({
        mutationFn: deleteBillApi,
        onSuccess: (response) => {
            let mode;
            let message;
            if (response?.code === '200') {
                getBill.mutate({ data: { pageIndex: 1, pageSize: 10 } });
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
        getBill.mutate({ data: { pageIndex: 1, pageSize: 10 } });
    }, []);

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h3" mb={4}>
                    Hóa đơn
                </Typography>
            </Box>
            <TableBase
                rows={column}
                data={getBill.data?.content}
                loading={getBill.isLoading}
                sx={{ minWidth: '550px', overflow: 'hidden' }}
            />
            <DialogApprove
                open={open}
                setOpen={setOpen}
                onRefesh={() => getBill.mutate({ data: { pageIndex: 1, pageSize: 10 } })}
                id={id}
            />
        </Box>
    );
}

export default Bill;
