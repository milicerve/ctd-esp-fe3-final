import { TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { FocusEvent } from 'react';

interface CustomTextFieldProps {
    name: string;
    label: string;
    type: string;
    required?: boolean;
    control: Control<any>;
    defaultValue?: string;
    textFieldProps?: Record<string, any>;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
}

export const CustomTextField = ({name, label, type, required, control, defaultValue, textFieldProps, onFocus}: CustomTextFieldProps) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                < TextField
                    {...field}
                    type={type}
                    label={label}
                    variant="outlined"
                    fullWidth
                    required={required}
                    sx={{ mb: 2 }}
                    {...textFieldProps}
                    onFocus={(e) => {
                        onFocus?.(e as FocusEvent<HTMLInputElement>);
                    }}
                />
            )
            }
        />
    );
};