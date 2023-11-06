import { Dialog, DialogTitle, IconButton } from '@mui/material';
import Infomation from './Infomation';
import CloseIcon from '@mui/icons-material/Close';
import { title } from 'process';
import ContactUs from './ContactUs';
import Term from './Term';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    title: string;
}

function AboutUs({ open, setOpen, title }: Props) {
    return (
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="lg">
            <DialogTitle textAlign="center" fontSize="32px" my={4}>
                <IconButton
                    sx={{ color: 'black', position: 'absolute', top: '12px', right: '2px' }}
                    onClick={() => setOpen(false)}>
                    <CloseIcon />
                </IconButton>
                {title === 'info'
                    ? 'Giới thiệu về chúng tôi'
                    : title === 'contact'
                    ? 'Liên hệ với chúng tôi'
                    : 'Điều khoản sử dụng'}
            </DialogTitle>
            {title === 'info' ? <Infomation /> : title === 'contact' ? <ContactUs /> : <Term />}
        </Dialog>
    );
}

export default AboutUs;
