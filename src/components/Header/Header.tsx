import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import NavbarBreadcrumbs from './components/NavbarBreadcrumbs/NavbarBreadcrumbs';
import MenuButton from '@/components/common/MenuButton/MenuButton';
import ColorModeIconDropdown from '@/components/common/ColorModeIconDropdown/ColorModeIconDropdown';

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1900px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />

      <Stack direction="row" sx={{ gap: 1 }}>
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
}
