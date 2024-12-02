import React from 'react';
import { Button as MuiButton } from '@mui/material';
import s from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  className?: string;
  disabled?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  sx?: React.CSSProperties;
  variant?: 'contained' | 'outlined' | 'text';
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant, className, ...rest } = props;

  const buttonClassName = classNames(s.button, {
    [s['button__outlined']]: variant === 'outlined',
  }, className);

  return (
    <MuiButton sx={{borderRadius: '5em'}} className={buttonClassName} variant={variant} {...rest}>
      {children}
    </MuiButton>
  );
};