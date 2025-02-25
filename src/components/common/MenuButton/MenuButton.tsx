import Badge, { badgeClasses } from '@mui/material/Badge';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

export interface IMenuButtonProps extends IconButtonProps {
  showBadge?: boolean;
}

const MenuButton = ({ showBadge = false, ...props }: IMenuButtonProps) => {
  return (
    <Badge
      color="error"
      variant="dot"
      invisible={!showBadge}
      sx={{ [`& .${badgeClasses.badge}`]: { right: 2, top: 2 } }}
    >
      <IconButton size="small" {...props} />
    </Badge>
  );
};

export default MenuButton;
