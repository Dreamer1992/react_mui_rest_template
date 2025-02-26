import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { tabsClasses } from '@mui/material/Tabs';

const ToolbarStyled = styled(Toolbar)({
  width: '100%',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '12px',
  flexShrink: 0,
  [`& ${tabsClasses.flexContainer}`]: {
    gap: '8px',
    p: '8px',
    pb: 0,
  },
});

export default ToolbarStyled;
