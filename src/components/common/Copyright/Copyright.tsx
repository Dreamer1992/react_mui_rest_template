import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright = () => {
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
};

export default Copyright;
