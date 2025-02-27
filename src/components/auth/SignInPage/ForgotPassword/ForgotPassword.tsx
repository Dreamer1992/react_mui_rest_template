import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import { observer } from 'mobx-react-lite';

interface IForgotPasswordProps {
  open: boolean;
  handleClose: () => void;
}

const ForgotPassword = observer(({ open, handleClose }: IForgotPasswordProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            handleClose();
          },
          sx: { backgroundImage: 'none' },
        },
      }}
    >
      <DialogTitle>Сброс пароля</DialogTitle>

      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
        <DialogContentText>
          Введите адрес электронной почты вашего аккаунта, и мы отправим вам ссылку для сброса пароля.
        </DialogContentText>
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Почта"
          placeholder="Почта"
          type="email"
          fullWidth
        />
      </DialogContent>

      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Отменить</Button>
        <Button variant="contained" type="submit">
          Продолжить
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default ForgotPassword;
