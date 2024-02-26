import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const RegisterForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const handleSubmit = () => {

    }
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ bgcolor: 'secondary.main' }}>

                </Avatar>
                <Typography component="h5" variant="h6" sx={{ textAlign: 'center', mt: 2 }}>
                    Sign Up to see photos and videos from your friends
                </Typography>
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
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="fullname"
                        label="Full Name"
                        type="text"
                        id="fullname"
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="current-password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="username"
                        label="User Name"
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="current-password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container>

                        <Grid sitem >
                            <Link to="/" variant="body2" >
                                {"Have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default RegisterForm