import { Typography } from '@mui/material';
import { TableBaseProps } from '@src/modules/module-base/constants';
import TableBase from '@src/modules/module-base/components/TableBase';
import { TGetTotalBill } from '../../models';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

interface Props {
    data: TGetTotalBill[];
    loading: boolean;
}

function TableTotalPrice({ data, loading }: Props) {
    const [total, setTotal] = useState<number>(0);
    const column: TableBaseProps<TGetTotalBill>['rows'] = [
        {
            id: 'id',
            label: 'ID',
            render: (item) => <Typography variant="caption">{item.course.id}</Typography>,
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
            id: 'count',
            label: 'Số lượng đã bán',
            render: (item) => <Typography variant="caption">{item.countCourse}</Typography>,
        },
        {
            id: 'totalBill',
            label: 'Tổng tiền',
            render: (item) => <Typography variant="caption">{`${item.sumCourse.toLocaleString()} đ`}</Typography>,
        },
    ];

    useEffect(() => {
        let price = 0;
        if (data) {
            data.map((item) => {
                price += item.totalReport;
            });
        }
        setTotal(price);
    }, [data]);

    return (
        <Box>
            <TableBase rows={column} data={data} loading={loading} sx={{ minWidth: '550px', overflow: 'hidden' }} />
            <Typography>Tổng tiền khóa học của bạn : {total}</Typography>
        </Box>
    );
}

export default TableTotalPrice;
