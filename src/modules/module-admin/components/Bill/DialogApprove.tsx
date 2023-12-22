import { LoadingButton } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import DialogBase from '@src/modules/module-base/components/DialogBase';
import FormControlInput from '@src/modules/module-base/components/react-hook-form-mui-base/FormControlInput';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { addLessonApi } from '../../apis/Course';
import { useDispatch } from 'react-redux';
import { getCourseTypeAll } from '@src/modules/module-global/api/Course';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { approveBillApi } from '../../apis/Bill';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    onRefesh: () => void;
    id?: number;
}

function DialogApprove({ open, setOpen, onRefesh, id }: Props) {
    const dispatch = useDispatch();

    const approveBill = useMutation({
        mutationFn: approveBillApi,
        onSuccess: (response) => {
            let mode;
            let message;
            if (response?.code === '200') {
                onRefesh();
                mode = 'success';
                message = 'Xác nhận thành công';
            } else {
                mode = 'error';
                message = 'Xác nhận thất bại';
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
        <DialogBase
            open={open}
            displayWitdh="sm"
            setOpen={setOpen}
            textTitle={<Typography variant="h4">Xác nhận hóa đơn đã được thanh toán</Typography>}
            contentText={
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <LoadingButton
                        sx={{ bgcolor: '#ff8f26', borderRadius: '99px', p: '9px 36px', mr: 2, color: '#fff' }}
                        loading={approveBill.isLoading}
                        onClick={() => approveBill.mutate({ data: { id: id } })}>
                        Đồng ý
                    </LoadingButton>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ borderRadius: '99px', p: '9px 36px' }}
                        onClick={() => setOpen(false)}>
                        Hủy bỏ
                    </Button>
                </Box>
            }
        />
    );
}

export default DialogApprove;
