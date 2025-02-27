import { useColorScheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select';
import { observer } from 'mobx-react-lite';

type Mode = 'light' | 'dark' | 'system';

type ColorModeSelectProps = Omit<SelectProps<Mode>, 'value' | 'onChange'>;

const ColorModeSelect = observer((props: ColorModeSelectProps) => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const handleColorModeChange = (event: SelectChangeEvent<Mode>) => {
    setMode(event.target.value as Mode);
  };

  return (
    <Select<Mode> value={mode} onChange={handleColorModeChange} {...props}>
      <MenuItem value="system">Системная</MenuItem>
      <MenuItem value="light">Светлая</MenuItem>
      <MenuItem value="dark">Темная</MenuItem>
    </Select>
  );
});

export default ColorModeSelect;
