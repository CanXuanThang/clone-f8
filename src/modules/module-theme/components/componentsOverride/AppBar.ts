import { Components, Theme } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AppBar = (theme: Theme): Components<Omit<Theme, 'components'>> => {
    return {
        MuiAppBar: {
            styleOverrides: {},
        },
    };
};
