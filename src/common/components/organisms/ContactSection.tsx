import { Box, Typography, Grid2 as Grid, TextField, Button, Paper } from '@mui/material';

export default function ContactSection() {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={4}>
        {/* Formulario */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Contáctenos y sé parte del <span style={{ color: '#FF6F00' }}>mejor centro</span> de negocios de todo México.
            </Typography>
            <form>
              <TextField fullWidth label="Nombre" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Correo" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Teléfono" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Dirección" variant="outlined" sx={{ mb: 2 }} />
              <Button fullWidth variant="contained" color="warning" sx={{ py: 1.5, fontWeight: 'bold' }}>
                Enviar
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Mapa y Datos */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Mapa */}
            <Box
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 1,
                mb: 3,
                height: '250px',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Box>

            {/* Información */}
            <Typography variant="body2" align="center" color="text.secondary">
              <strong>Cranium Centro de Negocios</strong>
              <br />
              Av. Vialidad 5003, Col. Ciudad Granja
              <br />
              Zapopan, Jalisco, México. CP 45010
              <br />
              <strong>Contacto:</strong> 33-1234-5678 | <a href="#">Ver aviso legal</a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
