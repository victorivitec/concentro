// import Image from 'next/image';
// import Grid from '@mui/material/Grid2';
// import { Box } from '@mui/material';
// import { PrimaryLayout as Layout } from '~/components/templates/layout';
// import CardComponent from '~/components/molecules/Card';
import Image from 'next/image';
import { Grid2 as Grid, Box } from '@mui/material';
import { PrimaryLayout as Layout } from '~/components/templates/layout';
import { Button } from '~/components/atoms/input/Button';
import { Text } from '~/components/atoms/data-display/Text';

export default function Home() {
  return (
    <Layout>
      {/* section */}
      <Box>
        <Grid container>
          {/* texto */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ marginBottom: '2em' }}>
              <Text type='h2'>Concentro</Text>
              <Text type='h2'>ha cambiado.</Text>
            </Box>
            {/* botón */}
            <Button variant='contained'>ver más</Button>
          </Grid>
          {/* imagen */}
          <Grid>
            <Image src={'/images/image.png'} width={500} height={500} alt='ola' />
          </Grid>
          {/* talon */}
          <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', py: '2em' }}>
            <Button color='inherit' sx={{ fontWeight: 'bold' }}>
              Inicio - ver más
            </Button>
            <Box sx={{ textAlign: 'end' }}>
              <Text>Contacto</Text>
              <Text color='primary'>00-000-0000</Text>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* otra sección */}
      <Box>
        <Grid container>
          <Grid>
            <Box sx={{ display: 'flex' }}>
              <Text type='h5'>Puntos de</Text>
              <Text type='h5' color='primary'>
                &nbsp;Valor
              </Text>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* otra sección */}
      <Box>
        <Grid container>
          <Grid>
            <Text type='h5'>Conoce nuestros planes y escoge el que</Text>
            <Text type='h5' color='primary'>
              mejor se adapte a ti
            </Text>
          </Grid>
        </Grid>
      </Box>
      {/* otra sección */}
      <Box>
        <Grid container>
          <Grid>
            <Text type='h5'>Más de 120 empresas en nuestro centro de negocios,</Text>
            <Text type='h5' color='primary'>
              quieres ser nuestro aliado comercial?
            </Text>
          </Grid>
        </Grid>
      </Box>
      {/* otra sección */}
      <Box>
        <Grid container>
          <Grid>
            <Text type='h5'>Conoce nuestros planes y escoge el que</Text>
            <Text type='h5' color='primary'>
              mejor se adapte a ti
            </Text>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
