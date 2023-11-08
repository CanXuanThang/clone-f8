import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    textTitle?: string | React.ReactNode;
    contentText?: React.ReactNode;
}

function DialogBase({ open, setOpen, textTitle, contentText }: Props) {
    return (
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="lg">
            <DialogTitle textAlign="center" fontSize="32px" my={4}>
                <IconButton
                    sx={{ color: 'black', position: 'absolute', top: '12px', right: '2px' }}
                    onClick={() => setOpen(false)}>
                    <CloseIcon />
                </IconButton>
                {textTitle}
            </DialogTitle>
            {contentText && <DialogContent>{contentText}</DialogContent>}
        </Dialog>
    );
}

export default DialogBase;
