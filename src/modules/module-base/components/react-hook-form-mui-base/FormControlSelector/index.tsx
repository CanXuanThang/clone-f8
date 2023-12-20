import { SelectProps, Stack, Typography, alpha } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import { Control, RegisterOptions } from 'react-hook-form';
import SelectField from './SelectField';

type Props = SelectProps & {
    label: React.ReactNode | string;
    colon?: boolean;
    required?: boolean;
    name: string;
    control: Control<any>;
    selectInputStyle?: React.CSSProperties;
    rules?: Omit<RegisterOptions<any, any>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    data: any;
    placeholder: string;
    renderLabelItem: (item: any) => string | React.ReactNode;
    renderValueItem: (item: any) => any;
    disableItem?: (item: any) => boolean;
    defaultItemText?: string;
};

const FormControlSelect = ({
    colon,
    control,
    required,
    selectInputStyle,
    label,
    name,
    rules,
    data,
    placeholder,
    renderLabelItem,
    renderValueItem,
    defaultItemText,
    disableItem,
    ...rest
}: Props) => {
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
            ]}>
            <Typography variant="body1">
                {label}
                {required && (
                    <Typography component="span" color="error">
                        *
                    </Typography>
                )}
                <span>{colon ? ':' : ''}</span>
            </Typography>

            <SelectField
                control={control}
                name={name}
                rules={rules}
                data={data}
                placeholder={placeholder}
                renderLabelItem={renderLabelItem}
                renderValueItem={renderValueItem}
                defaultItemText={defaultItemText}
                disableItem={disableItem}
                {...rest}
            />
        </Stack>
    );
};

export default FormControlSelect;
