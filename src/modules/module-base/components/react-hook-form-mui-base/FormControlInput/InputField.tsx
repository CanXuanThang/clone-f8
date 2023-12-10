import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { useState } from 'react';
import { Control, RegisterOptions, useController } from 'react-hook-form';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';

type Props = TextFieldProps & {
    name: string;
    clearIcon?: boolean;
    clearIconHasValue?: boolean;
    control: Control<any>;
    rules?: Omit<RegisterOptions<any, any>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    regex?: RegExp;
};

const InputField = ({
    control,
    name,
    InputProps,
    inputProps,
    type = 'text',
    rules,
    clearIconHasValue = false,
    clearIcon = false,
    regex,
    ...rest
}: Props) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
    });
    const [showPassword, setShowPassword] = useState(false);

    return (
        <TextField
            fullWidth
            name={name}
            value={value || ''}
            onChange={(e) => {
                if (e.target.value && regex && !regex.test(e.target.value)) {
                    return;
                }
                onChange(e.target.value);
            }}
            onBlur={onBlur}
            inputRef={ref}
            variant="filled"
            error={!!error}
            helperText={error?.message || ''}
            inputProps={{
                autoComplete: type === 'password' ? 'new-password' : undefined,
                ...inputProps,
            }}
            type={showPassword ? 'text' : type}
            InputProps={{
                endAdornment:
                    (type === 'password' && value) || (clearIcon && !!error && value) || (clearIconHasValue && value) ? (
                        <InputAdornment position="end" sx={{ px: '2px', ml: 0 }}>
                            {type === 'password' && value && (
                                <IconButton
                                    size="small"
                                    onClick={() => {
                                        setShowPassword((prev) => !prev);
                                    }}>
                                    {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                                </IconButton>
                            )}

                            {((clearIcon && !!error && value) || (clearIconHasValue && value)) && (
                                <IconButton size="small" onClick={() => onChange('')}>
                                    <CloseIcon />
                                </IconButton>
                            )}
                        </InputAdornment>
                    ) : undefined,
                style: { paddingRight: 0 },
                ...InputProps,
            }}
            {...rest}
        />
    );
};

export default InputField;
