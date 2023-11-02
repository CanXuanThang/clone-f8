import { Components, Theme, alpha } from '@mui/material';

export const TextField = (theme: Theme): Components<Omit<Theme, 'components'>> => {
    return {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontFamily: 'Lato',
                    borderRadius: 8,
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        // borderColor: theme.palette.grey[700],
                    },
                },
                input: {
                    // padding: '11px 12px',
                    fontFamily: 'Lato',
                },
                notchedOutline: {
                    borderColor: theme.palette.grey[500],
                    borderWidth: '1px !important',
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    bgcolor: theme.palette.grey[200],
                    overflow: 'hidden',
                    ':hover': {
                        bgcolor: theme.palette.grey[200],
                    },
                    '&.Mui-error:hover': {
                        bgcolor: theme.palette.error.light,
                    },
                    '&.Mui-disabled:hover': {
                        bgcolor: alpha(theme.palette.common.black, 0.12),
                    },
                },
                error: {
                    border: `2px solid ${theme.palette.error.light}`,
                    bgcolor: theme.palette.error.light,
                    'input:focus': {
                        bgcolor: theme.palette.error.light,
                    },
                    'input:hover': {
                        bgcolor: theme.palette.error.light,
                    },
                },
                input: {
                    padding: '12px',
                    ':disabled': {
                        WebkitTextFillColor: theme.palette.grey[1000],
                    },
                },
                inputSizeSmall: {
                    padding: '8px',
                    ':disabled': {
                        WebkitTextFillColor: theme.palette.grey[1000],
                    },
                },
            },
            defaultProps: {
                disableUnderline: true,
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            // background: theme.palette.grey[200],
                        },
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    '& .MuiFilledInput-root': {
                        padding: '5px 55px 5px 5px !important',
                    },
                    '& .MuiInputBase-sizeSmall': {
                        padding: '5px 55px 5px 10px !important',
                    },
                },
                option: {
                    '&[aria-selected="true"]': {
                        bgcolor: `${theme.palette.success.light} !important`,
                        color: `${theme.palette.success.main} !important`,
                    },
                },
            },
        },
    };
};
