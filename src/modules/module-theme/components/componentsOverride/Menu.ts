import { Components, Theme } from '@mui/material';
import { green } from '../../constants';

/** constants */

export const Menu = (theme: Theme): Components<Omit<Theme, 'components'>> => {
    return {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    ':active': {
                        bgcolor: theme.palette.success.light,
                        color: theme.palette.success.main,
                    },
                    '&.Mui-selected': {
                        bgcolor: theme.palette.success.light,
                        color: theme.palette.success.main,
                        ':hover': {
                            bgcolor: green[300],
                        },
                    },
                },
            },
        },
    };
};
