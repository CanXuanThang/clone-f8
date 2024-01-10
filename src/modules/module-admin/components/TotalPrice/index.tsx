import { Box, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { TableBaseProps } from '@src/modules/module-base/constants';
import TableBase from '@src/modules/module-base/components/TableBase';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { TAdminGet } from '../../models';
import { deleteBillApi, getBillApi } from '../../apis/Bill';

function TotalPrice() {
    const [total, setTotal] = useState(0);
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
            render: (item) => <Typography variant="caption">{`${item.totalBill.toLocaleString()} đ`}</Typography>,
        },
    ];

    const getBill = useMutation({
        mutationFn: getBillApi,
    });

    useEffect(() => {
        getBill.mutate({ data: { pageIndex: 1, pageSize: 10 } });
    }, []);

    useEffect(() => {
        let total = 0;
        const len = getBill.data?.content.length;
        getBill.data?.content.map((item, index) => {
            if (item.status === 2) {
                total += item.totalBill;
            }
            if (len === index + 1) {
                return setTotal(total);
            }
        });
    }, [getBill.data]);

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h3" mb={4}>
                    Danh sách đăng ký khóa học
                </Typography>
            </Box>
            <TableBase
                rows={column}
                data={getBill.data?.content.filter((data) => data.status === 2)}
                loading={getBill.isLoading}
                sx={{ minWidth: '550px', overflow: 'hidden' }}
            />
            <Typography sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }} color="green">
                Tổng tiền:
                <Typography component={'span'} sx={{ pl: 1, color: 'red' }}>
                    {`${total.toLocaleString()} đ`}
                </Typography>
            </Typography>
        </Box>
    );
}

export default TotalPrice;
