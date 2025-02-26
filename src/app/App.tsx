import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ThemeProvider from '@/providers/themeProvider/ThemeProvider';
import { publicRoutes, protectedRoutes } from '@/routes/routes';
import { useAuth } from '@/hooks/useAuth';

const App = (props: { disableCustomTheme?: boolean }) => {
  const { isAuthenticated } = useAuth();

  const routes = useRoutes(isAuthenticated ? protectedRoutes : publicRoutes);

  return (
    <ThemeProvider {...props}>
      <Suspense
        fallback={
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100dvh' }}>
            <CircularProgress />
          </Box>
        }
      >
        {routes}
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
