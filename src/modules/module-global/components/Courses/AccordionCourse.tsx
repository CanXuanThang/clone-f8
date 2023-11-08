import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function AccordionCourse() {
    return (
        <Box>
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
        </Box>
    );
}

export default AccordionCourse;
