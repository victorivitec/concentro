import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import lightTheme from '~/themes/light.theme';

import Navbar from '../../organisms/Navbar';
export const PrimaryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <br />
      <br />
      <Navbar />
      <Container maxWidth="xl">{children}</Container>
    </ThemeProvider>
  );
};
