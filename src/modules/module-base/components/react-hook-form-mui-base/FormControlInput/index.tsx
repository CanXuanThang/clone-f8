import { Stack, SxProps, TextFieldProps, Theme, Typography, alpha } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { ReactNode } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import InputField from './InputField';

type Props = TextFieldProps & {
    label: ReactNode | string;
    sx?: SxProps<Theme>;
    required: boolean;
    name: string;
    clearIcon?: boolean;
    control: Control<any>;
    rules?: Omit<RegisterOptions<any, any>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
};

function FormControlInput(props: Props) {
    const { label, sx, required, name, control, rules, clearIcon, ...rest } = props;
    return (
        <Stack
            direction="column"
            alignItems="flex-start"
            spacing={label ? 1 : 0}
            sx={[
                {
                    width: '100%',
                    height: '100%',
                    py: label ? 1 : 0,
                    '& .MuiTextField-root': {
                        width: '100%',
                        height: '100%',
                        '& .MuiInputBase-root': {
                            bgcolor: 'background.neutral',
                            '& .MuiInputBase-input': {
                                '&::placeholder': {
                                    color: 'grey.1000',
                                    opacity: 1,
                                },
                            },
                        },
                        svg: {
                            path: {
                                fill: ({ palette }) => `${palette.primary.main} !important`,
                            },
                        },
                    },
                    '& textarea': {
                        '&::-webkit-scrollbar, ::-webkit-scrollbar': {
                            width: '7px',
                            height: '7px',
                        },
                        '&::-webkit-scrollbar-track, ::-webkit-scrollbar-track': {
                            borderRadius: '10px',
                            backgroundColor: ({ palette }) => alpha(palette.common.black, 0.1),
                        },
                        '&::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb': {
                            borderRadius: '10px',
                            backgroundColor: ({ palette }) => alpha(palette.common.black, 0.2),
                        },
                        '&::-webkit-scrollbar-thumb:hover, ::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: ({ palette }) => alpha(palette.common.black, 0.4),
                        },
                        '&::-webkit-scrollbar-thumb:active, ::-webkit-scrollbar-thumb:active': {
                            backgroundColor: ({ palette }) => alpha(palette.common.black, 0.9),
                        },
                    },
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}>
            {label ? (
                <Typography variant="body1" color="text.secondary" ml="3px !important" display="flex" fontFamily="Lato">
                    {label}
                    {required && (
                        <Typography variant="body1" color="error.main" component="span">
                            &nbsp;*
                        </Typography>
                    )}
                </Typography>
            ) : null}

            <InputField control={control} name={name} rules={rules} clearIcon={clearIcon} margin="none" {...rest} />
        </Stack>
    );
}

export default FormControlInput;
