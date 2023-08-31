import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material';

export default function App({ Component, pageProps }) {
 
  const theme=createTheme({})

  return <ThemeProvider theme={theme}>
  <Navbar/>

    <Component {...pageProps} />

    </ThemeProvider>
  
}
