import { Box, IconButton, Typography } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { TableBaseProps } from '@src/modules/module-base/constants';
import TableBase from '@src/modules/module-base/components/TableBase';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { TAdminGet } from '../../models';
import { deleteBillApi, getBillApi } from '../../apis/Bill';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DialogApprove from './DialogApprove';

function Bill() {
    const [open, setOpen] = useState<boolean>(false);
    const [id, setId] = useState<number>();
    const limit = useRef(10);

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
            id: 'displayName',
            label: 'Tên user',
            render: (item) => <Typography variant="caption">{item.buyUser.displayName}</Typography>,
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
            render: (item) => <Typography variant="caption">{`${item.totalBill.toLocaleString()} đ`}</Typography>,
        },
        {
            id: 'action',
            label: '',
            render: (item) =>
                item.status === 1 && (
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

    const getBillAdmin = useQuery({
        queryKey: ['GETBILLADMIN'],
        queryFn: () => getBillApi({ data: { pageIndex: 1, pageSize: limit.current } }),
        enabled: false,
    });

    const deleteBill = useMutation({
        mutationFn: deleteBillApi,
        onSuccess: (response) => {
            let mode;
            let message;
            if (response?.code === '200') {
                getBillAdmin.refetch().then();
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

    const onScroll: TableBaseProps<TAdminGet>['onScroll'] = (event) => {
        const element = event.target as HTMLDivElement;
        const total = getBillAdmin.data?.totalElements || 0;
        if (total <= limit.current || element.scrollTop + element.clientHeight + 5 < element.scrollHeight) {
            return;
        }
        limit.current = limit.current + 10;
        getBillAdmin.refetch().then();
    };

    useEffect(() => {
        getBillAdmin.refetch().then();
    }, []);

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h3" mb={4}>
                    Danh sách đăng ký khóa học
                </Typography>
            </Box>
            <TableBase
                rows={column}
                data={getBillAdmin.data?.content.filter((data) => data.status === 1)}
                loading={getBillAdmin.isLoading}
                onScroll={onScroll}
            />

            <DialogApprove open={open} setOpen={setOpen} onRefesh={() => getBillAdmin.refetch().then()} id={id} />
        </Box>
    );
}

export default Bill;
