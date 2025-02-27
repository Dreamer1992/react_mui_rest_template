import { Box, Button, Typography, Link } from '@mui/material';
import SignContainerStyled from '@/components/auth/common/SignContainerStyled/SignContainerStyled';
import SignCardStyled from '@/components/auth/common/SignCardStyled/SignCardStyled';
import ColorModeSelect from '@components/auth/common/ColorModeSelect/ColorModeSelect.tsx';
import SitemarkIcon from '@icons/SitemarkIcon/SitemarkIcon.tsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  signUpSchema,
  signUpSchemaDefaultValues,
  TSignUpSchema,
} from '@/components/auth/SignUpPage/schema/signUpSchema';
import { FormInputText } from '@/components/form/FormInputText/FormInputText';
import { Link as RouterLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const SignUp = observer(() => {
  const formMethods = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'all',
    defaultValues: signUpSchemaDefaultValues,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const isDisabled = Object.keys(errors).length > 0;

  const handleSignUp = () => {};

  return (
    <SignContainerStyled direction="column" justifyContent="space-between">
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />

      <SignCardStyled variant="outlined">
        <SitemarkIcon />

        <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
          Регистрация
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(handleSignUp)}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <FormInputText
            control={control}
            name="firstName"
            label="Имя"
            required
            placeholder="Иван"
            autoComplete="name"
          />

          <FormInputText
            control={control}
            name="lastName"
            label="Фамилия"
            required
            placeholder="Иванов"
            autoComplete="name"
          />

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

          <FormInputText
            control={control}
            name="passwordConfirmation"
            label="Подтверждение пароля"
            required
            placeholder="••••••"
            type="password"
            autoComplete="new-password"
          />

          <Button type="submit" fullWidth variant={isDisabled ? 'outlined' : 'contained'} disabled={isDisabled}>
            Зарегистрироваться
          </Button>
        </Box>

        {/* <Divider>
          <Typography sx={{ color: 'text.secondary' }}>or</Typography>
        </Divider> */}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* <Button fullWidth variant="outlined" onClick={() => alert('Sign up with Google')} startIcon={<GoogleIcon />}>
            Sign up with Google
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign up with Facebook')}
            startIcon={<FacebookIcon />}
          >
            Sign up with Facebook
          </Button> */}

          <Typography sx={{ textAlign: 'center' }}>
            У вас уже есть учетная запись?{' '}
            <Link component={RouterLink} to="/auth/sign-in/" variant="body2" sx={{ alignSelf: 'center' }}>
              Войти
            </Link>
          </Typography>
        </Box>
      </SignCardStyled>
    </SignContainerStyled>
  );
});

export default SignUp;
