import Box from '@mui/material/Box';
import Copyright from '@/components/Footer/components/Copyright/Copyright';
import { observer } from 'mobx-react-lite';

const Footer = observer(() => {
  return (
    <Box component="footer">
      <Copyright />
    </Box>
  );
});

export default Footer;
