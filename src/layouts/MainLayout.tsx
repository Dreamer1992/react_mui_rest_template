import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import AppNavbar from '@/components/AppNavbar/AppNavbar';
import SideMenu from '@/components/SideMenu/SideMenu';
import { alpha } from '@mui/material/styles';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { observer } from 'mobx-react-lite';

const MainLayout = observer(() => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
      <CssBaseline enableColorScheme />

      <SideMenu />

      <Box sx={{ display: 'flex', flexDirection: 'column', mx: 3, width: '100%' }}>
        <AppNavbar />
        <Header />

        <Box
          component="main"
          sx={(theme) => {
            return {
              flexGrow: 1,
              backgroundColor: theme.vars
                ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                : alpha(theme.palette.background.default, 1),
              overflow: 'auto',
              marginTop: { xs: '65px', md: 0 },
            };
          }}
        >
          <Outlet />
        </Box>

        <Footer />
      </Box>
    </Box>
  );
});

export default MainLayout;
