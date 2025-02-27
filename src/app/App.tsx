import { observer } from 'mobx-react-lite';
import { useAuth } from '@/hooks/useAuth';
import { Box, CircularProgress } from '@mui/material';
import ThemeProvider from '@/providers/themeProvider/ThemeProvider';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { publicRoutes, protectedRoutes } from '@/routes/routes';

const App = observer((props: { disableCustomTheme?: boolean }) => {
  const { isAuthenticated, isLoading } = useAuth();

  const routes = useRoutes(isAuthenticated ? protectedRoutes : publicRoutes);

  if (isLoading) {
    return (
      <ThemeProvider {...props}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100dvh' }}>
          <CircularProgress />
        </Box>
      </ThemeProvider>
    );
  }

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
});

export default App;
