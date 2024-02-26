import React from 'react';

import { Box, Container, Grid, } from '@mui/material'
import LoginForm from './components/LoginForm';
const Login = () => {

    return (
        <>
            <Container component="main" maxWidth="md">
                <Box sx={{

                    marginTop: { sm: 7, md: 20 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >
                    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 6, sm: 6, md: 12 }}>
                        <Grid item xs={6} sm={6} md={6} sx={{ display: { xs: 'none', sm: "block" } }}>
                            <Box sx={{
                                width: '100%',
                                height: '100%',
                                '& img': {
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    backgroundRepeat:"no-repeat"
                                },
                            }}>
                                <img style={{ borderRadius: "20px" }}
                                    src="https://github.githubassets.com/assets/hero-desktop-a38b0fd77b6c.webp" alt="Instagram" />
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}  >
                            <Box sx={{
                                padding: "70px 8px",
                                boxShadow: 3,
                                margin: '20px 0px',
                            }}>
                                <LoginForm />
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Container>

        </>
    )
}

export default Login
