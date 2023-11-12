import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/Home">
                Midterm
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    const [alertProps, setAlertProps] = useState({
        open: false,
        message: '',
        severity: 'success', // Default to success
    });

    const navigate = useNavigate();
    const defaultTheme = createTheme();

    const handleAlertClose = () => {
        setAlertProps((prev) => ({ ...prev, open: false }));
    };

    const showAlert = (message, severity = 'success') => {
        setAlertProps({
            open: true,
            message,
            severity,
        });

        // Hide the Alert after 4 seconds (4000 milliseconds)
        setTimeout(() => {
            handleAlertClose();
        }, 4000);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        if (!email || !password) {
            showAlert('Email and password are required.', 'error');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/auth/signin', {
                email: data.get('email'),
                password: data.get('password'),
            });

            const { token } = response.data;
            localStorage.setItem('email', data.get('email'));
            localStorage.setItem('token', token);

            showAlert('Sign-in successful', 'success');
            navigate('/');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                showAlert('Invalid email or password. Please try again.', 'error');
            } else {
                console.error('Error during sign-in:', error);
                showAlert('An unexpected error occurred. Please try again later.', 'error');
            }
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Snackbar
                        open={alertProps.open}
                        autoHideDuration={4000}
                        onClose={handleAlertClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    >
                        <Alert onClose={handleAlertClose} severity={alertProps.severity} sx={{ width: '100%' }}>
                            {alertProps.message}
                        </Alert>
                    </Snackbar>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="./signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}