'use client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Navbar from '../organisms/Navbar';
import React from 'react';
import { lightTheme } from '~/themes/common';
import {Container} from '@mui/material';

export const PrimaryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <Navbar />
      <Container maxWidth={false} fixed>
      <br />
      <br />
        {children}</Container>
        <br /><br />
    </ThemeProvider>
  );
};
