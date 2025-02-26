import { Outlet } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import { observer } from 'mobx-react-lite';

const AuthLayout = observer(() => {
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
});

export default AuthLayout;
