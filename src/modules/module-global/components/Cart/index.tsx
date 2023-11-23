import { Box, Checkbox, Grid, Typography } from '@mui/material';

function Card() {
    return (
        <Box mx={8}>
            <Typography variant="h3">Giỏ hàng</Typography>
            <Typography>Bạn đang có 1 sản phẩm trong giỏ hàng</Typography>
            <Grid container>
                <Grid item xs={6}>
                    <Checkbox />
                    <Box>
                        <img src="" alt="" />
                        <Box>
                            <Typography>ten khoa hoc</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </Box>
    );
}

export default Card;
