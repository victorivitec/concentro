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

import { Container } from '@mui/material';

const logos = [
  { src: '/images/empresas/amazon.png', alt: 'amazon Logo', size: 'small' },
  { src: '/images/empresas/adidas.png', alt: 'adidas Logo', size: 'small' }, // Correcto
  { src: '/images/empresas/apple.png', alt: 'Apple Logo', size: 'large' },
  { src: '/images/empresas/google.png', alt: 'google Logo', size: 'large' },
  { src: '/images/empresas/nike.png', alt: 'nike Logo', size: 'small' },
  { src: '/images/empresas/pepsi.png', alt: 'Pepsi Logo', size: 'small' },
  { src: '/images/empresas/uber.png', alt: 'uber Logo', size: 'small' },
  { src: '/images/empresas/volkswagen.png', alt: 'volkswagen Logo', size: 'small' },
];

export default function Home() {
  return (
    <Layout>
      <Container maxWidth='xl' sx={{px: {xs:'0'}}}>
      {/* Banner section _______________________________________________________________________________________ */}
      <Box>
        {/* parent */}
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'center', md: 'space-between' }, flexDirection: { xs: 'column', md: 'row' } }}>
          {/* child 1 */}
          <Box sx={{ width: {xs: 'auto', md: '30vw'} }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Text type='h2'>
                Concentro <br /> ha cambiado
              </Text>
              <Button variant='contained'>ver más</Button>
            </Box>
          </Box>
          {/* child 2 */}
          <Box
      sx={{
        opacity: { xs: 0.7, md: 1 },
        zIndex: { xs: -1, md: 1 },
        top: { xs: '5%' },
        position: { xs: 'absolute', md: 'relative' },
        height: { xs: '40vh', md: '60vh' }, // Define la altura
        width: { xs: '90%', md: '70vw' }, // Define el ancho
        maxHeight: '100%',
        maxWidth: '100%',
      }}
    >
      <Image
        src="/images/1.png"
        alt="logo"
        fill
        sizes="(max-width: 600px) 100vw, 70vw" // Mejora el rendimiento en pantallas pequeñas
        style={{ objectFit: 'contain' }}
      />
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
                sx={{ height: { xs: 'auto', md: '20vh' }, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
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
          <Box
  sx={{
    height: { xs: '30vh', md: '40vh' }, // Altura ajustable según el viewport
    width: { xs: '100%', md: '30vw' },  // Ancho fijo basado en el viewport
    position: 'relative', // Necesario para que funcione el "fill" de next/image
    maxWidth: '100%', // Garantiza que no se desborde en dispositivos pequeños
  }}
>
  <Image
    src="/images/2.png"
    alt="logo"
    fill
    sizes="(max-width: 600px) 100vw, 30vw" // Mejora el rendimiento en pantallas pequeñas
    style={{ objectFit: 'contain' }} // Asegura que la imagen se mantenga dentro del contenedor
  />
</Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Box sx={{ textAlign: {xs: 'center'}}}>
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
          <Grid size={{xs: 12, md:6}} sx={{ textAlign: {xs: 'center'}}}>
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
          <Grid size={{ sm: 12, md: 3 }}>
          <Box
  sx={{
    height: { xs: '30vh', md: '40vh' }, // Altura ajustable según el viewport
    width: { xs: '100%', md: '30vw' },  // Ancho fijo basado en el viewport
    position: 'relative', // Necesario para que funcione el "fill" de next/image
    maxWidth: '100%', // Garantiza que no se desborde en dispositivos pequeños
  }}
>
  <Image
    src="/images/3.png"
    alt="logo"
    fill
    sizes="(max-width: 600px) 100vw, 30vw" // Mejora el rendimiento en pantallas pequeñas
    style={{ objectFit: 'contain' }} // Asegura que la imagen se mantenga dentro del contenedor
  />
</Box>
          </Grid>
          <Grid size={{ sm: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'flex-start' }}>
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
          <Grid size={{ sm: 12, md: 3 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
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
        <Grid size={{sm: 12, md: 4}} sx={{px: '0.5em'}}>
          <Text type="h4" color="primary">test</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima voluptates, illo aperiam reprehenderit aliquid odit sit omnis impedit unde?</Text>
        </Grid>
        <Grid size={{sm: 12, md: 4}} sx={{px: '0.5em'}}>
          <Text type="h4" color="primary">test</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima voluptates, illo aperiam reprehenderit aliquid odit sit omnis impedit unde?</Text>
        </Grid>
        <Grid size={{sm: 12, md: 4}} sx={{px: '0.5em'}}>
          <Text type="h4" color="primary">test</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima voluptates, illo aperiam reprehenderit aliquid odit sit omnis impedit unde?</Text>
        </Grid>
        </Grid>
      </Grid>
      {/* seccion contacto */}
      <ContactSection />
      </Container>
    </Layout>
  );
}
