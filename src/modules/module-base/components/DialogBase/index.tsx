import { Breakpoint, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    textTitle?: string | React.ReactNode;
    contentText?: React.ReactNode;
    displayWitdh?: false | Breakpoint | undefined;
    contentFooter?: React.ReactNode;
}

function DialogBase({ open, setOpen, textTitle, contentText, displayWitdh = 'lg', contentFooter }: Props) {
    return (
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth={displayWitdh}>
            <DialogTitle textAlign="center" fontSize="32px" my={4}>
                <IconButton
                    sx={{ color: 'black', position: 'absolute', top: '12px', right: '2px' }}
                    onClick={() => setOpen(false)}>
                    <CloseIcon />
                </IconButton>
                {textTitle}
            </DialogTitle>
            {contentText && <DialogContent sx={{ mx: 4 }}>{contentText}</DialogContent>}
            {contentFooter && <DialogActions sx={{ mb: 3 }}>{contentFooter}</DialogActions>}
        </Dialog>
    );
}

export default DialogBase;
