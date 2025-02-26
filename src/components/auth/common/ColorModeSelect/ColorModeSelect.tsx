import { useColorScheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select';

type Mode = 'light' | 'dark' | 'system';

type ColorModeSelectProps = Omit<SelectProps<Mode>, 'value' | 'onChange'>;

const ColorModeSelect = (props: ColorModeSelectProps) => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const handleColorModeChange = (event: SelectChangeEvent<Mode>) => {
    setMode(event.target.value as Mode);
  };

  return (
    <Select<Mode> value={mode} onChange={handleColorModeChange} {...props}>
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
};

export default ColorModeSelect;
