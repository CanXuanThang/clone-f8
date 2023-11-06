import { Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SearchComponent from './SearchComponent';
import SliderShow from './SliderShow';
import Login from '../Login';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';

function HomeScreen() {
    return (
        <Stack>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Stack flexDirection="row" alignItems="center" sx={{ display: { md: 'flex', xs: 'none' } }}>
                    <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2, color: '#ff8f26' }}>
                        <AutoStoriesIcon />
                    </IconButton>
                    <Typography variant="body1" sx={{ flexGrow: 1 }} color="grey.1100">
                        Học lập trình để đi làm
                    </Typography>
                </Stack>
                <SearchComponent />
                <Login />
            </Toolbar>
            <Box>
                <SliderShow />
                <BodyComponent />
                <FooterComponent />
            </Box>
        </Stack>
    );
}

export default HomeScreen;
