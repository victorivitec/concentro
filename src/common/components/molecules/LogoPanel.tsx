'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface LogoPanelProps {
  logos: { src: string; alt: string; size?: string }[]; // Define los tamaños permitidos
}

const LogoPanel: React.FC<LogoPanelProps> = ({ logos }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        gap: '12px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '8px',
      }}
    >
      {logos.map((logo, index) => (
        <Box
          key={index}
          sx={{
            gridColumn: logo.size === 'large' ? 'span 2' : 'span 1', // Ocupa 2 columnas si es grande
            gridRow: logo.size === 'large' ? 'span 2' : 'span 1', // Ocupa 2 filas si es grande
            aspectRatio: '1', // Mantener un cuadrado perfecto
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 12px 12px rgba(0, 0, 0, 0.4)',
            position: 'relative',
            bgcolor: 'white',
          }}
        >
          <Image src={logo.src} alt={logo.alt} fill sizes="(max-width: 600px) 50vw, 33vw" style={{ objectFit: 'contain' }} />
        </Box>
      ))}
    </Box>
  );
};

export default LogoPanel;
