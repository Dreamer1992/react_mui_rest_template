import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuButton from '@/components/common/MenuButton/MenuButton';
import ColorModeIconDropdown from '@/components/common/ColorModeIconDropdown/ColorModeIconDropdown';

import DashboardRoundedIcon from './components/DashboardRoundedIcon/DashboardRoundedIcon';
import SideMenuMobile from './components/SideMenuMobile/SideMenuMobile';
import ToolbarStyled from './components/ToolbarStyled/ToolbarStyled';
import { observer } from 'mobx-react-lite';

const AppNavbar = observer(() => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        display: { xs: 'auto', md: 'none' },
        boxShadow: 0,
        bgcolor: 'background.paper',
        backgroundImage: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
        top: 'var(--template-frame-height, 0px)',
      }}
    >
      <ToolbarStyled variant="regular">
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            flexGrow: 1,
            width: '100%',
            gap: 1,
          }}
        >
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', mr: 'auto' }}>
            <DashboardRoundedIcon />

            <Typography variant="h4" component="h1" sx={{ color: 'text.primary' }}>
              Dashboard
            </Typography>
          </Stack>

          <ColorModeIconDropdown />

          <MenuButton aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuRoundedIcon />
          </MenuButton>

          <SideMenuMobile open={open} toggleDrawer={toggleDrawer} />
        </Stack>
      </ToolbarStyled>
    </AppBar>
  );
});

export default AppNavbar;
