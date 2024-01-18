import { Box, IconButton, Typography } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { TableBaseProps } from '@src/modules/module-base/constants';
import TableBase from '@src/modules/module-base/components/TableBase';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { deleteUserApi, getAllUserApi } from '../../apis/User';
import { DataRegister } from '@src/modules/module-global/models/apis';

function User() {
    const limit = useRef(10);
    const dispatch = useDispatch();

    const column: TableBaseProps<DataRegister>['rows'] = [
        {
            id: 'id',
            label: 'ID',
            render: (item) => <Typography variant="caption">{item.id}</Typography>,
        },
        {
            id: 'username',
            label: 'Username',
            render: (item) => <Typography variant="caption">{item.username}</Typography>,
        },
        {
            id: 'email',
            label: 'Email',
            render: (item) => <Typography variant="caption">{item.email}</Typography>,
        },
        {
            id: 'displayName',
            label: 'Tên người dùng',
            render: (item) => <Typography variant="caption">{item.displayName}</Typography>,
        },
        {
            id: 'phoneNumber',
            label: 'Số điện thoại',
            render: (item) => <Typography variant="caption">{item.phoneNumber}</Typography>,
        },
        {
            id: 'roles[0].name',
            label: 'Quyền người dùng',
            render: (item) => <Typography variant="caption">{item.roles[0].name}</Typography>,
        },
        {
            id: 'action',
            label: '',
            render: (item) => (
                <IconButton color="error" onClick={() => deleteBill.mutate({ data: { id: item.id } })}>
                    <DeleteIcon />
                </IconButton>
            ),
        },
    ];

    const getAllUser = useQuery({
        queryKey: ['GET_ALL_USER_ADMIN'],
        queryFn: () => getAllUserApi({ data: { pageIndex: 1, pageSize: limit.current } }),
        enabled: false,
    });

    const deleteBill = useMutation({
        mutationFn: deleteUserApi,
        onSuccess: (response) => {
            let mode;
            let message;
            if (response?.code === '200') {
                getAllUser.refetch().then();
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

    const onScroll: TableBaseProps<DataRegister>['onScroll'] = (event) => {
        const element = event.target as HTMLDivElement;
        const total = getAllUser.data?.totalElements || 0;
        if (total <= limit.current || element.scrollTop + element.clientHeight + 5 < element.scrollHeight) {
            return;
        }
        limit.current = limit.current + 10;
        getAllUser.refetch().then();
    };

    useEffect(() => {
        getAllUser.refetch().then();
    }, []);

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h3" mb={4}>
                    Danh sách người dùng
                </Typography>
            </Box>
            <TableBase
                rows={column}
                data={getAllUser.data?.content}
                loading={getAllUser.isLoading || deleteBill.isLoading}
                onScroll={onScroll}
            />
        </Box>
    );
}

export default User;
