import { Typography, Link } from '@mui/material';
import { observer } from 'mobx-react-lite';

const Copyright = observer(() => {
  return (
    <Typography variant="body2" align="center" sx={[{ color: 'text.secondary', py: 3 }]}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        React app template
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
});

export default Copyright;
