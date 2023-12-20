import React, { useState } from 'react';
import { useController, Control, RegisterOptions } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Select, MenuItem, useTheme, Typography, FormHelperText, SelectProps } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type Props = SelectProps & {
    data: any[];
    control: Control<any>;
    name: string;
    customField?: object;
    rules?: Omit<RegisterOptions<any, any>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    placeholder: string;
    renderLabelItem: (item: any) => string | React.ReactNode;
    renderValueItem: (item: any) => string;
    defaultItemText?: string;
    disableItem?: (item: any) => boolean;
};

function SelectField(props: Props) {
    const {
        control,
        name,
        data,
        rules,
        placeholder,
        renderLabelItem,
        renderValueItem,
        defaultItemText = 'n/a',
        disableItem = () => false,
        ...rest
    } = props;
    const theme = useTheme();
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({ name, control, rules });

    const [open, setOpen] = useState(false);

    return (
        <>
            <Select
                value={value !== '' && value !== undefined && value !== null ? value : ''}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                fullWidth
                inputRef={ref}
                onChange={onChange}
                onBlur={onBlur}
                margin="dense"
                variant="filled"
                disableUnderline
                displayEmpty
                error={!!error}
                renderValue={
                    value !== '' && value !== undefined && value !== null
                        ? undefined
                        : () => <Typography color="textSecondary">{placeholder}</Typography>
                }
                IconComponent={() => {
                    return (
                        <KeyboardArrowDownIcon
                            style={{
                                display: 'inline-block',
                                flexShrink: 0,
                                transition: 'all 300ms',
                                position: 'absolute',
                                right: '12px',
                                top: 'calc(50% - 9px)',
                                width: '18px',
                                height: '18px',
                                pointerEvents: 'none',
                                rotate: open ? '-180deg' : '0deg',
                            }}
                        />
                    );
                }}
                inputProps={{
                    placeholder,
                }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            px: '10px',
                            mt: '2px',
                            border: '1px solid',
                            borderRadius: '8px',
                            borderColor: 'grey.500',
                            boxShadow: 0,
                            maxHeight: '350px',
                        },
                    },
                }}
                {...rest}>
                {!rules?.required ? (
                    <MenuItem
                        key={defaultItemText}
                        value=""
                        sx={{
                            py: '8px',
                            borderRadius: '6px',
                            mt: '2px',
                            '&:hover': { color: theme.palette.success['main'] },
                        }}>
                        <FormattedMessage id={defaultItemText} />
                    </MenuItem>
                ) : null}

                {data.map((item: any) => (
                    <MenuItem
                        key={renderValueItem(item)}
                        value={renderValueItem(item)}
                        disabled={disableItem(item)}
                        sx={{
                            py: '8px',
                            borderRadius: '6px',
                            mt: '2px',
                            '&:hover': { color: theme.palette.success['main'] },
                        }}>
                        {renderLabelItem(item)}
                    </MenuItem>
                ))}
            </Select>

            <FormHelperText error variant="outlined">
                {error?.message || ''}
            </FormHelperText>
        </>
    );
}

export default SelectField;
