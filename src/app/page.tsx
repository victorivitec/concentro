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
import { ServiceCard } from '~/components/molecules/Card';

import SecurityIcon from '@mui/icons-material/Security';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

export default function Home() {
  return (
    <Layout>
      {/* Banner section _______________________________________________________________________________________ */}
      <Box>
        {/* parent */}
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, flexDirection: { xs: 'column', md: 'row' } }}>
          {/* child 1 */}
          <Box sx={{ width: '100%' }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Text type='h2'>
                Concentro <br /> ha cambiado
              </Text>
              <Button variant='contained'>ver más</Button>
            </Box>
          </Box>
          {/* child 2 */}
          <Box sx={{ height: { xs: '30vh', md: '50vh' }, width: { xs: '100vw', md: '50vw' }, position: 'relative' }}>
            <Image src='/images/image.png' alt='logo' fill style={{ objectFit: 'contain' }} />
          </Box>
        </Box>
      </Box>
      {/*
        -
        -      
      */}
      {/* otra sección */}
      <Box>
        <Grid container>
          {/* title */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box>
              <Text type='h4' sx={{ textAlign: 'center' }}>
                Puntos de <span style={{ color: '#f68529' }}>Valor</span>
              </Text>
            </Box>
          </Grid>
          {/* description */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Text sx={{ marginTop: '1em' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis eligendi earum ducimus iste dolore! Nihil eius dolore ut
              eveniet autem.
            </Text>
          </Grid>
          {/* container button & carousel */}
          <Grid size={12}>
            <Grid container sx={{py: '2em'}}>
              <Grid size={{ xs: 12, md: 3 }} sx={{ display: 'flex', justifyContent: 'center', py: '2em' }}>
                <Box>
                  <Button variant='outlined'>ver más</Button>
                </Box>
              </Grid>
              {/* tarjetas */}
              <Grid size={{ xs: 12, md: 9 }} sx={{ height: {xs: '90vh', md: '35vh'},display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <ServiceCard
                  title='Zona de alimentos'
                  description='Seleccione comida entre una amplia variedad.'
                  icon={<SecurityIcon fontSize='large' color='primary' />}
                />
                <ServiceCard
                  title='Seguridad'
                  description='Servicios 24/7 para tu tranquilidad.'
                  icon={<SecurityIcon fontSize='large' color='primary' />}
                />
                <ServiceCard
                  title='Servicios médicos'
                  description='Acceso inmediato a atención médica.'
                  icon={<LocalHospitalIcon fontSize='large' color='primary' />}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* otra sección */}
      <Box>
        <Grid container>
          <Grid sx={{ display: 'flex' }}>
            <Image src={'/images/image.png'} width={350} height={350} alt='ola' />
            <Box>
              <Text type='h5'>
                Conoce nuestros planes y escoge el que <span style={{ color: '#f68529' }}>mejor se adapte a ti</span>
              </Text>
              <Button variant='contained' color='secondary'>
                ver más
              </Button>
            </Box>
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
