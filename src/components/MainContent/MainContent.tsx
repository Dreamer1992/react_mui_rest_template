import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react-lite';

const MainContent = observer(() => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: { sm: '100%', md: '1900px' },
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          Контент
        </Typography>

        <Grid container spacing={2} columns={12}>
          <Grid size={{ xs: 12 }}>
            <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti vel maiores, excepturi ratione
              quas. Ipsum quod labore quisquam provident a expedita, pariatur praesentium nostrum assumenda adipisci,
              sit mollitia reiciendis.
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
});

export default MainContent;
