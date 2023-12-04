import { Accordion, AccordionDetails, AccordionSummary, Box, Drawer, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Props {
    open?: boolean;
    setOpen?: (value: boolean) => void;
}

function AccordionCourse({ open, setOpen }: Props) {
    const theme = useTheme();

    return (
        <Drawer
            open={open}
            sx={{
                width: '25%',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '25%',
                    mt: '62px',
                },
            }}
            variant="persistent"
            anchor="right">
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ div: { justifyContent: 'space-between' } }}>
                    <Typography variant="subtitle2">1. Khái niệm kỹ thuật cần biết</Typography>
                    <Typography mr={2}>2 bài học</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box display="flex" alignItems="center" mb={2}>
                        <PlayCircleIcon sx={{ color: 'rgba(240,81,35,.4)', mr: 1 }} />
                        <Typography>1. Mô hình Client - Server là gì ?</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                        <PlayCircleIcon sx={{ color: 'rgba(240,81,35,.4)', mr: 1 }} />
                        <Typography>2. Mô hình Client - Server là gì ?</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                        <PlayCircleIcon sx={{ color: 'rgba(240,81,35,.4)', mr: 1 }} />
                        <Typography>3. Mô hình Client - Server là gì ?</Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ div: { justifyContent: 'space-between' } }}>
                    <Typography variant="subtitle2">2. Khái niệm kỹ thuật cần biết</Typography>
                    <Typography mr={2}>2 bài học</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box display="flex" alignItems="center" mb={2}>
                        <PlayCircleIcon sx={{ color: 'rgba(240,81,35,.4)', mr: 1 }} />
                        <Typography>1. Mô hình Client - Server là gì ?</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                        <PlayCircleIcon sx={{ color: 'rgba(240,81,35,.4)', mr: 1 }} />
                        <Typography>2. Mô hình Client - Server là gì ?</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                        <PlayCircleIcon sx={{ color: 'rgba(240,81,35,.4)', mr: 1 }} />
                        <Typography>3. Mô hình Client - Server là gì ?</Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Box sx={{ width: '100%', bgcolor: '#f0f0f0', position: 'fixed', bottom: 0, height: '64px', display: 'flex' }}>
                <IconButton onClick={() => setOpen && setOpen(false)} sx={{ color: 'black' }}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </Box>
        </Drawer>
    );
}

export default AccordionCourse;
