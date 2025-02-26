import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppNavbar from '@/components/AppNavbar/AppNavbar';
import SideMenu from '@/components/SideMenu/SideMenu';
import { alpha } from '@mui/material/styles';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
      <CssBaseline enableColorScheme />

      <SideMenu />

      <AppNavbar />

      <Box
        component="main"
        sx={(theme) => {
          return {
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          };
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
