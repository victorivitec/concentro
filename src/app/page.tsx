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
        <Grid container sx={{ py: '10em' }}>
          {/* Text & Button __________ */}
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ py: '4em', display: { sm: 'flex' }, justifyContent: { sm: 'center' } }}>
            <Box>
              {/* texto */}
              <Box sx={{ textAlign: { xs: 'center', md: 'initial' } }}>
                <Text type='h2'>
                  Concentro <br /> ha cambiado
                </Text>
              </Box>
              {/* botón */}
              <Button variant='contained'>ver más</Button>
            </Box>
          </Grid>
          {/* imagen __________ */}
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Box sx={{ height: { xs: '25em', md: '100%' }, position: 'relative' }}>
              <Image src='/images/image.png' alt='logo' fill style={{ objectFit: 'contain' }} />
            </Box>
          </Grid>
          {/* talon __________ */}
          <Grid sx={{ width: '100vw', display: 'flex', justifyContent: 'center', py: '2em' }}>
            <Button color='inherit' sx={{ fontWeight: 'bold' }}>
              Inicio - ver más
            </Button>
            <Box sx={{ textAlign: 'end' }}>
              <Text sx={{fontWeight: 'bold'}}>Contacto</Text>
              <Text color='primary' sx={{fontWeight: 'bold'}}>00-000-0000</Text>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* otra sección */}
      <Box>
        <Grid container>
          {/* container del texto */}
          <Grid sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', width: '50%' }}>
              <Text type='h5'>Puntos de</Text>
              <Text type='h5' color='primary'>
                &nbsp;Valor
              </Text>
            </Box>
            <Box>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis eligendi earum ducimus iste dolore! Nihil eius dolore ut
                eveniet autem.
              </Text>
            </Box>
          </Grid>
          {/* container button & carousel */}
          <Grid sx={{ display: 'flex', justifyContent: 'space-between', height: '40vh' }}>
            <Box sx={{ width: '50%' }}>
              <Button variant='outlined'>ver más</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
            </Box>
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
