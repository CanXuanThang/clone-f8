import { LoadingButton } from '@mui/lab';
import { Box, Button, Dialog, DialogActions, DialogContent, Divider, Grid, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { paymentApi } from '../../api/Bill';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { SCREEN } from '../../constants/screen';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
}

function DialogBanking({ open, setOpen }: Props) {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const param = useParams();

    const mutation = useMutation({
        mutationFn: paymentApi,
        onSuccess: (res) => {
            let mode;
            let message;
            if (res?.code === '200') {
                mode = 'success';
                message = 'Vui lòng chờ phản hồi của admin';
                setOpen(false);
                navigation(SCREEN.HOME, { replace: true });
            } else {
                mode = 'error';
                message = 'Thanh toán thất bại';
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
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="xs">
            <DialogContent>
                <Typography variant="h6" color="red" textAlign="center" mt={3}>
                    Vui lòng chuyển khoản trước khi bấm đồng ý !
                </Typography>
            </DialogContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3 }}>
                <LoadingButton
                    sx={{ bgcolor: '#ff8f26', borderRadius: '99px', p: '9px 36px', mr: 2, color: '#fff' }}
                    loading={mutation.isLoading}
                    onClick={() => mutation.mutate({ data: { courseId: Number(param.courseId) } })}>
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
        </Dialog>
    );
}

export default DialogBanking;
