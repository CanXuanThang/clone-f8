import { LoadingButton } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import TableTotalPrice from './TableTotalPrice';
import { useMutation } from '@tanstack/react-query';
import { getTotalBillApi } from '../../apis/Bill';
import { useDispatch } from 'react-redux';
import DateTimePickerBase from '@src/modules/module-base/components/DateTimePickerBase';
import moment from 'moment';
import { useState } from 'react';
import { TGetTotalBill } from '../../models';

type FormData = {
    fromDate: Date;
    toDate: Date;
};

function TotalPrice() {
    const dispatch = useDispatch();
    const [data, setData] = useState<TGetTotalBill[]>([]);
    const { control, handleSubmit, reset } = useForm<FormData>();
    const getTotalBill = useMutation({
        mutationFn: getTotalBillApi,
        onSuccess: (res) => {
            let mode;
            let message;
            if (res?.code === '200') {
                mode = 'success';
                message = 'Thành công';
                setData(res.data);
                reset();
            } else {
                mode = 'error';
                message = 'Thất bại';
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

    const onSubmit = (formData: FormData) => {
        const fromDate = moment(formData.fromDate).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
        const toDate = moment(formData.toDate).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
        getTotalBill.mutate({ data: { fromDate: fromDate, toDate: toDate } });
    };
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h3" mb={4}>
                    Danh sách đăng ký khóa học
                </Typography>
            </Box>
            <Box component="form" display="flex" flexDirection="row" gap={3} onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="fromDate"
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { isTouched, isDirty, error },
                    }) => {
                        let selectedDate = value;
                        return <DateTimePickerBase selectedDate={selectedDate} onChange={onChange} onBlur={onBlur} />;
                    }}
                />
                <Controller
                    control={control}
                    name="toDate"
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { isTouched, isDirty, error },
                    }) => {
                        let selectedDate = value;
                        return <DateTimePickerBase selectedDate={selectedDate} onChange={onChange} onBlur={onBlur} />;
                    }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', pb: 1 }}>
                    <LoadingButton
                        sx={{
                            bgcolor: '#ff8f26',
                            borderRadius: '99px',
                            p: '9px 9px',
                            mr: 2,
                            color: '#fff',
                            minWidth: '120px',
                        }}
                        // loading={mutation.isLoading}
                        type="submit">
                        Đồng ý
                    </LoadingButton>
                </Box>
            </Box>
            <TableTotalPrice data={data} loading={getTotalBill.isLoading} />
        </Box>
    );
}

export default TotalPrice;
