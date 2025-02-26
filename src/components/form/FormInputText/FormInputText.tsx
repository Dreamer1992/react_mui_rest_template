import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

type TFormInputTextProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  sx?: SxProps<Theme>;
};

export const FormInputText = <TFieldValues extends FieldValues>({
  name,
  control,
  label,
  required = false,
  fullWidth = true,
  placeholder,
  type = 'text',
  autoComplete,
  sx,
  ...otherProps
}: TFormInputTextProps<TFieldValues>) => (
  <FormControl sx={sx}>
    {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box>
          <TextField
            {...field}
            {...otherProps}
            id={name}
            type={type}
            required={required}
            fullWidth={fullWidth}
            placeholder={placeholder}
            autoComplete={autoComplete}
            error={!!error}
            helperText={error?.message}
            color={error ? 'error' : 'primary'}
          />
        </Box>
      )}
    />
  </FormControl>
);
