import React from 'react';
import { Box, Container, Grid } from '@mui/material'
import RegisterForm from './components/RegisterForm';
const Register = () => {

  return (
    <>
      <Container component="main" maxWidth="sm">
        <Box sx={{
          marginTop: { sm: 12, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }} >
          <Grid container spacing={{ xs: 1, md: 1 }} sx={{ boxShadow: 4 }} columns={{ xs: 12, sm: 12, md: 12 }} >
            <Grid item xs={12} sm={12} md={12}  >
              <Box sx={{
                padding: "70px 8px",
                margin: '20px 0px',
              }}>
                <RegisterForm />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

    </>
  )
}

export default Register
