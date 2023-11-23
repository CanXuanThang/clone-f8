import { Avatar, Button, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Box, List, Typography } from '@mui/material';
import React from 'react';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

function Comment() {
    return (
        <Box mx={8} maxHeight="500px" my={4}>
            <Typography variant="h5">Bình luận</Typography>
            <List>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="name"
                        secondary={<React.Fragment>{" I'll be in your neighborhood doing errands this…"}</React.Fragment>}
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="name"
                        secondary={<React.Fragment>{" I'll be in your neighborhood doing errands this…"}</React.Fragment>}
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="name"
                        secondary={<React.Fragment>{" I'll be in your neighborhood doing errands this…"}</React.Fragment>}
                    />
                </ListItem>
            </List>
            <FormContainer>
                <Box display="flex" alignItems="center" maxWidth="30%">
                    <TextFieldElement
                        name="phone"
                        required
                        placeholder="Bình luận của bạn ..."
                        fullWidth
                        sx={{
                            '& > div': {
                                borderRadius: '44px',
                                '& > input': {
                                    p: '12px 5px 12px 20px',
                                },
                                '& > fieldset': {
                                    border: '1px solid #ccc',
                                    '& .MuiOutlinedInput-notchedOutline:hover': {
                                        borderColor: '#ccc',
                                    },
                                },
                            },
                            my: 1,
                        }}
                    />
                    <Button
                        type="submit"
                        sx={{
                            p: '8px 16px',
                            width: '80px',
                            ml: 3,
                            bgcolor: '#ff8f26',
                            borderRadius: '44px',
                            color: '#fff',
                        }}>
                        OK
                    </Button>
                </Box>
            </FormContainer>
        </Box>
    );
}

export default Comment;
