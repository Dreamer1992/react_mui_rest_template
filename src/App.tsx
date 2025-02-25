import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/AppNavbar/AppNavbar';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import ThemeProvider from './providers/themeProvider/ThemeProvider';
import MainContent from './components/MainContent/MainContent';

function App(props: { disableCustomTheme?: boolean }) {
  return (
    <ThemeProvider {...props}>
      <CssBaseline enableColorScheme />

      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <SideMenu />

        <AppNavbar />

        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => {
            console.log('theme', theme);
            return {
              flexGrow: 1,
              backgroundColor: theme.vars
                ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                : alpha(theme.palette.background.default, 1),
              overflow: 'auto',
            };
          }}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              // pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />

            <MainContent />
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
