import { Typography } from '@mui/material';
import { TableBaseProps } from '@src/modules/module-base/constants';
import TableBase from '@src/modules/module-base/components/TableBase';
import { useState } from 'react';
import { TGetTotalBill } from '../../models';

interface Props {
    data: TGetTotalBill[];
    loading: boolean;
}

function TableTotalPrice({ data, loading }: Props) {
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

    return <TableBase rows={column} data={data} loading={loading} sx={{ minWidth: '550px', overflow: 'hidden' }} />;
}

export default TableTotalPrice;
