import React from 'react'
import AppAppBar from '../globals/AppAppBar/AppAppBar'
import { Box, Container, CssBaseline } from '@mui/material';


const GlobalLayouts = ({ children }) => {
    return (
        <>
            <CssBaseline />
            <AppAppBar />
            <Box sx={{ bgcolor: 'background.default', marginTop: 11 }}>
              <Container>
              {children}
              </Container>
            </Box>
        </>
    );
}
export default GlobalLayouts;