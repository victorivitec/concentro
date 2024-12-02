'use client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Container } from '@mui/material';
import Navbar from '../organisms/Navbar';
import React from 'react';
import { lightTheme } from '~/themes/common';

export const PrimaryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Navbar />
      <br />
      <br />
      <Container maxWidth='lg'>{children}</Container>
      <br /><br /><br /><br /><br />
    </ThemeProvider>
  );
};
