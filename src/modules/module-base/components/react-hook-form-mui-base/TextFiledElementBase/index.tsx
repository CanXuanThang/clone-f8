import * as React from 'react';
import { Stack, SxProps, Theme, Typography, alpha } from '@mui/material';
import { TextFieldElement, PasswordElement, TextFieldElementProps } from 'react-hook-form-mui';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { Controller } from 'react-hook-form';

/** constants */

/** types */
import { emptyObject } from './constants';

type TexFieldElementBaseProps = {
    label?: React.ReactNode;
    sx?: SxProps<Theme>;
    textFieldProps: TextFieldElementProps;
};

function TexFieldElementBase(props: TexFieldElementBaseProps) {
    const { label, sx = emptyObject, textFieldProps } = props;

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
                    {textFieldProps.required && (
                        <Typography variant="body1" color="error.main" component="span">
                            &nbsp;*
                        </Typography>
                    )}
                </Typography>
            ) : null}

            {textFieldProps.type === 'tel' ? (
                <Controller
                    name={textFieldProps.name}
                    control={textFieldProps.control}
                    rules={{ validate: matchIsValidTel }}
                    render={({ field, fieldState }) => (
                        <MuiTelInput
                            {...field}
                            defaultCountry="US"
                            helperText={fieldState.invalid ? 'You need to enter this field!' : ''}
                            error={fieldState.invalid}
                        />
                    )}
                />
            ) : textFieldProps.type === 'password' ? (
                <PasswordElement {...textFieldProps} />
            ) : (
                <TextFieldElement {...textFieldProps} />
            )}
        </Stack>
    );
}

export default TexFieldElementBase;
