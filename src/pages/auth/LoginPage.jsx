import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { useForm } from '../../Hooks/useForm';
import { FormHelperText } from '@mui/material';



export const LoginPage = () => {

   
    const { state, login } = useContext(AuthContext);
    const { formState, onChangeInput } = useForm();


    const handleSubmitLogin = (event) => {
      event.preventDefault();
      login(formState.username, formState.password);
    }


  return (
    
    <>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmitLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              // error
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={onChangeInput}
            />
            <TextField
              // error
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChangeInput}
            />

            <FormHelperText
              id="component-helper-text"
              sx={{ color:'red' }}
            >
            </FormHelperText>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              INGRESAR
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Recuperar Contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Registrarse"}
                </Link>
              </Grid>
            </Grid>
          </Box>

          <Box marginTop={5} textAlign={'left'}>
            <Typography variant='body2'>User: kminchelle</Typography>
            <Typography variant='body2'>Pass: 0lelplR</Typography>
          </Box>
    </>
  )
}
