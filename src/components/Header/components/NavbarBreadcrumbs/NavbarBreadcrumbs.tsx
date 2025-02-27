import { styled } from '@mui/material/styles';
import { Typography, Breadcrumbs, breadcrumbsClasses } from '@mui/material';
import { HomeOutlined, NavigateNextRounded } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

const NavbarBreadcrumbs = observer(() => {
  return (
    <StyledBreadcrumbs aria-label="breadcrumb" separator={<NavigateNextRounded fontSize="small" />}>
      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <HomeOutlined fontSize="small" />
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
        Главная
      </Typography>
    </StyledBreadcrumbs>
  );
});

export default NavbarBreadcrumbs;
