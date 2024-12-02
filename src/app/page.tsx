import Image from 'next/image';
import { Grid2 as Grid, Box } from '@mui/material';
import { PrimaryLayout as Layout } from '~/components/templates/layout';
import { Button } from '~/components/atoms/input/Button';
import { Text } from '~/components/atoms/data-display/Text';
import { ServiceCard } from '~/components/molecules/Card';
import LogoPanel from '~/components/molecules/LogoPanel';

import SecurityIcon from '@mui/icons-material/Security';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import ContactSection from '~/components/organisms/ContactSection';

const logos = [
  { src: '/images/image copy.png', alt: 'Amazon Logo', size: 'large' }, // Correcto
  { src: '/images/image.png', alt: 'Google Logo', size: 'small' },
  { src: '/images/image.png', alt: 'Apple Logo', size: 'large' },
  { src: '/images/image.png', alt: 'Nike Logo', size: 'small' },
  { src: '/images/image.png', alt: 'Pepsi Logo', size: 'small' },
];

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
          <Box sx={{ opacity: {xs: '0.7', md: '1'} , zIndex: {xs: -1, md: 1}, top:{xs: '5%'}, position: {xs: 'absolute', md: 'relative'},height: { xs: '50vh', md: '50vh' }, width: { xs: '100vw', md: '50vw' }}}>
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
                Puntos de <span style={{ color: '#f1842c' }}>Valor</span>
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
            <Grid container sx={{ py: '2em' }}>
              <Grid size={{ xs: 12, md: 3 }} sx={{ display: 'flex', justifyContent: 'center', py: '2em' }}>
                <Box>
                  <Button variant='outlined'>ver más</Button>
                </Box>
              </Grid>
              {/* tarjetas */}
              <Grid
                size={{ xs: 12, md: 9 }}
                sx={{ height: { xs: '80vh', md: '20vh' }, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}
              >
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
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ height: { xs: '30vh', md: '40vh' }, width: { xs: '100vw', md: '30vw' }, position: 'relative' }}>
              <Image src='/images/image.png' alt='logo' fill style={{ objectFit: 'contain' }} />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Box>
              <Text type='h5'>
                Conoce nuestros planes y escoge el que <span style={{ color: '#f1842c' }}>mejor se adapte a ti</span>
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
        <Grid container sx={{ py: '5em' }}>
          <Grid size={6}>
            <Text type='h5'>Más de 120 empresas en nuestro centro de negocios,</Text>
            <Text type='h5' color='primary'>
              quieres ser nuestro aliado comercial?
            </Text>
            <Button variant='contained' color='secondary'>
              contacto
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <LogoPanel logos={logos} />
          </Grid>
        </Grid>
      </Box>
      {/* otra sección */}
      <Box>
        <Grid container sx={{py: '5em'}}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ height: { xs: '20vh', md: '30vh' }, width: { xs: '100%', md: '20vw' }, position: 'relative' }}>
              <Image src='/images/image.png' alt='logo' fill style={{ objectFit: 'contain' }} />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Box>
              <Text type='h5'>
                Conoce nuestros planes y escoge el que <span style={{ color: '#f1842c' }}>mejor se adapte a ti</span>
              </Text>
              <Text type='caption'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reprehenderit perspiciatis perferendis praesentium recusandae,
                maiores, officia fugiat sint laboriosam corrupti atque quo iste expedita dolorum optio. Omnis iste commodi tempora!
              </Text>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <Box sx={{ py: '1em',display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
              <Text type='h4'>120</Text>
              <span style={{ color: '#f1842c', paddingLeft: '1em' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, provident.
              </span>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
              <Text type='h4'>120</Text>
              <span style={{ color: '#f1842c', paddingLeft: '1em' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, provident.
              </span>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
              <Text type='h4'>120</Text>
              <span style={{ color: '#f1842c', paddingLeft: '1em' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, provident.
              </span>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* otra sección */}
      <Grid>
        <Grid container>
        <Grid size={{xs: 12, md: 4}} sx={{px: '0.5em'}}>
          <Text type="h4" color="primary">test</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima voluptates, illo aperiam reprehenderit aliquid odit sit omnis impedit unde?</Text>
        </Grid>
        <Grid size={{xs: 12, md: 4}} sx={{px: '0.5em'}}>
          <Text type="h4" color="primary">test</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima voluptates, illo aperiam reprehenderit aliquid odit sit omnis impedit unde?</Text>
        </Grid>
        <Grid size={{xs: 12, md: 4}} sx={{px: '0.5em'}}>
          <Text type="h4" color="primary">test</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima voluptates, illo aperiam reprehenderit aliquid odit sit omnis impedit unde?</Text>
        </Grid>
        </Grid>
      </Grid>
      {/* seccion contacto */}
      <ContactSection />
    </Layout>
  );
}
