import PageRoutes from './routes/PageRoutes';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {  CssBaseline } from '@mui/material';
import getLPTheme from './globals/Themes/getLPthems';
import { useTheme } from './ThemeContext';

const defaultTheme = createTheme({});
function App() {
  const { mode, } = useTheme();
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
console.log("LPthemeLPtheme",LPtheme.shadows[3])
  return (
    <>
      <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <CssBaseline />
        <PageRoutes />
      </ThemeProvider>
    </>

  );
}

export default App;
