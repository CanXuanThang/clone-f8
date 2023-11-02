import { Components, Theme } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Toolbar = (theme: Theme): Components<Omit<Theme, 'components'>> => {
    return {
        MuiToolbar: {
            styleOverrides: {
                dense: {
                    height: 60,
                    minHeight: 60,
                },
            },
        },
    };
};
