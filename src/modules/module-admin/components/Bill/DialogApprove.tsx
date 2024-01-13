import { LoadingButton } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import DialogBase from '@src/modules/module-base/components/DialogBase';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
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
                setOpen(false);
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
