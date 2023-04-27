/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Chip,
  Divider,
  FormControl, FormHelperText, Input, InputLabel, TextField, Typography,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import React from 'react';
import ActionButton from '../../../../components/buttons.component/actionButton.button';
import { colors } from '../../../../styles/theme';
import { registerWithEmailAndPassword } from '../../../../firebase/auth';

function Login() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      pwd: '',
    },
  });

  const onRegisterSubmit = (data) => {
    registerWithEmailAndPassword(data.email, data.pwd);
  };

  return (
    <Box>
      <Typography variant="h6">
        Administration
      </Typography>
      <Typography>
        Connect to edit and add data to the map.
      </Typography>
      <form>
        <Box sx={{ marginY: 1 }}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <TextField {...field} sx={{ marginY: 0.5 }} fullWidth id="outlined-basic" label="Email" variant="outlined" />}
          />
          <Controller
            name="pwd"
            control={control}
            render={({ field }) => <TextField {...field} sx={{ marginY: 0.5 }} fullWidth id="outlined-basic" label="Password" variant="outlined" />}
          />
        </Box>
        <ActionButton sx={{ bgcolor: colors.primary, color: 'white', marginY: 1 }} title="Log in" isDisabled={false} fullWidth />
        <Divider>
          <Chip label="If new account" />
        </Divider>
        <ActionButton onClick={handleSubmit(onRegisterSubmit)} sx={{ marginY: 1 }} title="Sign in" isDisabled={false} fullWidth />
      </form>

    </Box>
  );
}

export default Login;
