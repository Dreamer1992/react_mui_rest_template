import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const AuthLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
      <CssBaseline enableColorScheme />

      <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%' }}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default AuthLayout;
