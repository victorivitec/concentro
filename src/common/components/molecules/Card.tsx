import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card
      elevation={0}
      sx={{
        margin: '0.5em',
        borderRadius: '12px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden', // Asegura que el contenido no desborde
        transition: 'height 0.3s, box-shadow 0.3s', // Animación suave
        height: 200, // Altura inicial
        width: { xs: '100%', md: '30%' },
        '&:hover': {
          boxShadow: 8,
          height: 250, // Altura aumentada al hacer hover
          '& .whatsapp-icon-box': {
            opacity: 1, // Hacer visible el ícono al alargar el card
            visibility: 'visible', // Asegura que el ícono sea renderizado
          },
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" fontWeight="bold" color="primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {description}
        </Typography>
      </CardContent>
      {/* Ícono de WhatsApp */}
      <Box
        className="whatsapp-icon-box" // Clase para vincular el estilo en hover
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          opacity: 0, // Inicialmente oculto
          visibility: 'hidden', // Ocultar del flujo del diseño
          transition: 'opacity 0.3s, visibility 0.3s', // Animación suave
        }}
      >
        <IconButton
          sx={{
            backgroundColor: 'green',
            color: 'white',
            '&:hover': { backgroundColor: 'darkgreen' },
          }}
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>
    </Card>
  );
};
