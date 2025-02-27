import { useState } from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import SitemarkIcon from '@/icons/SitemarkIcon/SitemarkIcon';
import SignContainerStyled from '@/components/auth/common/SignContainerStyled/SignContainerStyled';
import ColorModeSelect from '@/components/auth/common/ColorModeSelect/ColorModeSelect';
import SignCardStyled from '@/components/auth/common/SignCardStyled/SignCardStyled';
import ForgotPassword from '@/components/auth/SignInPage/ForgotPassword/ForgotPassword';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormInputText } from '@/components/form/FormInputText/FormInputText';
import {
  signInSchema,
  signInSchemaDefaultValues,
  TSignInSchema,
} from '@/components/auth/SignInPage/schema/signInSchema';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { ApiClient } from '@/api/APIClient';

const SignIn = observer(() => {
  const { userStore } = useStore();
  const navigate = useNavigate();

  const [openForgotPassword, setOpenForgotPassword] = useState(false);

  const formMethods = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: 'all',
    defaultValues: signInSchemaDefaultValues,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const isDisabled = Object.keys(errors).length > 0;

  const handleForgotPasswordOpen = () => {
    setOpenForgotPassword(true);
  };

  const handleForgotPasswordClose = () => {
    setOpenForgotPassword(false);
  };

  const handleSignIn = async (data: TSignInSchema) => {
    try {
      const loginResponse = await ApiClient.login(data);
      const { user } = loginResponse.data.resultData;

      userStore.user = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      };

      navigate('/dashboard');
    } catch (error) {
      console.error('Sign in failed:', error);
    }
  };

  return (
    <SignContainerStyled direction="column" justifyContent="space-between">
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />

      <SignCardStyled variant="outlined">
        <SitemarkIcon />

        <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
          Вход в систему
        </Typography>

        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(handleSignIn)(e);
          }}
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 2,
          }}
        >
          <FormInputText
            control={control}
            name="email"
            label="Почта"
            required
            placeholder="ivan@email.com"
            type="email"
            autoComplete="email"
          />

          <FormInputText
            control={control}
            name="password"
            label="Пароль"
            required
            placeholder="••••••"
            type="password"
            autoComplete="new-password"
          />

          <ForgotPassword open={openForgotPassword} handleClose={handleForgotPasswordClose} />

          <Button type="submit" fullWidth variant={isDisabled ? 'outlined' : 'contained'} disabled={isDisabled}>
            Войти
          </Button>

          <Link
            component="button"
            type="button"
            onClick={handleForgotPasswordOpen}
            variant="body2"
            sx={{ alignSelf: 'center' }}
          >
            Забыли пароль?
          </Link>
        </Box>

        {/* <Divider>
          <Typography sx={{ color: 'text.secondary' }}>or</Typography>
        </Divider> */}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* <Button fullWidth variant="outlined" onClick={() => alert('Sign in with Google')} startIcon={<GoogleIcon />}>
            Sign in with Google
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign in with Facebook')}
            startIcon={<FacebookIcon />}
          >
            Sign in with Facebook
          </Button> */}

          <Typography sx={{ textAlign: 'center' }}>
            У вас нет учетной записи?{' '}
            <Link component={RouterLink} to="/auth/sign-up/" variant="body2" sx={{ alignSelf: 'center' }}>
              Регистрация
            </Link>
          </Typography>
        </Box>
      </SignCardStyled>
    </SignContainerStyled>
  );
});

export default SignIn;
