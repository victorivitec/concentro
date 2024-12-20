import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SecurityIcon from '@mui/icons-material/Security';
import { Box, Grid2 as Grid } from '@mui/material';
import { Text } from '~/common/components/atoms/data-display/Text';
import { Button } from '~/common/components/atoms/inputs/Button';
import { ServiceCard } from '~/common/components/molecules/Card';
import LogoPanel from '~/common/components/molecules/LogoPanel';
import ContactSection from '~/common/components/organisms/ContactSection';
import { PrimaryLayout as Layout } from '~/common/components/templates/layouts/PrimaryLayout';
import s from '~/styles/pages/home-page.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

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
      {/* Banner section __________________________________________________________________________ */}
      <Box className={clsx('flex relative justify-center lg:justify-between items-center flex-wrap  h-[50vh]', s.block)}>
        {/* Text */}
        <Box>
          <Text type="h2" component="h2">
            Concentro <br /> ha cambiado
          </Text>
          <Button className="mt-6" variant="contained">
            Ver más
          </Button>
        </Box>
        {/* Image */}
        <Box
          sx={{
            position: { xs: 'relative', md: 'relative' },
            top: { xs: '-30%', md: 'auto' },
            width: { xs: '100%', md: '30vw' },
            maxWidth: '100%',
            opacity: { xs: '0.5', md: 1 },
            zIndex: -5,
          }}
        >
          <Image
            src="/images/1.png"
            alt="ola"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority
            width={500}
            height={300}
          />
        </Box>
      </Box>
      {/* Value Points ____________________________________________________________________________ */}
      <Box className={s.block}>
        <Grid container>
          {/* title */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Text type="h4" sx={{ textAlign: 'center' }}>
              Puntos de <span className="text-primary text-3xl">Valor</span>
            </Text>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis eligendi earum ducimus iste dolore! Nihil eius dolore ut
              eveniet autem.
            </Text>
          </Grid>
          {/* carousel */}
          <Grid size={12}>
            <Grid container sx={{ py: '2em' }}>
              <Grid size={{ xs: 12, md: 3 }} sx={{ display: 'flex', justifyContent: 'center', py: '2em' }}>
                <Box>
                  <Button className="mt-6" variant="outlined">
                    ver más
                  </Button>
                </Box>
              </Grid>
              {/* tarjetas */}
              <Grid
                size={{ xs: 12, md: 9 }}
                sx={{ height: { xs: 'auto', md: '20vh' }, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
              >
                <ServiceCard
                  title="Zona de alimentos"
                  description="Seleccione comida entre una amplia variedad."
                  icon={<SecurityIcon fontSize="large" color="primary" />}
                />
                <ServiceCard
                  title="Seguridad"
                  description="Servicios 24/7 para tu tranquilidad."
                  icon={<SecurityIcon fontSize="large" color="primary" />}
                />
                <ServiceCard
                  title="Servicios médicos"
                  description="Acceso inmediato a atención médica."
                  icon={<LocalHospitalIcon fontSize="large" color="primary" />}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Plains __________________________________________________________________________________ */}
      <Box className={clsx('flex relative justify-center lg:justify-between items-center flex-wrap', s.block)}>
        {/* image */}
        <Box
          sx={{
            width: { xs: '100%', md: '20vw' },
            maxWidth: '100%',
          }}
        >
          <Image
            src="/images/2.png"
            alt="ola"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority
            width={500}
            height={300}
          />
        </Box>
        {/* title & description */}
        <Box>
          <Text type="h5">
            Conoce nuestros planes y escoge el que <span className="text-primary text-2xl">mejor se adapte a ti</span>
          </Text>
          <Button className="mt-6" variant="contained" color="secondary">
            ver más
          </Button>
        </Box>
      </Box>
      {/* Enterprises _____________________________________________________________________________ */}
      <Box className={s.block}>
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: 'center' } }}>
            <Text type="h5">Más de 120 empresas en nuestro centro de negocios,</Text>
            <Text type="h5" color="primary">
              quieres ser nuestro aliado comercial?
            </Text>
            <Button className="mt-6" variant="contained" color="secondary">
              contacto
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} className="pt-6">
            <LogoPanel logos={logos} />
          </Grid>
        </Grid>
      </Box>
      {/* Stats ___________________________________________________________________________________ */}
      <Box className={s.block}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                width: { xs: '100%', md: '100%' },
                maxWidth: '100%',
              }}
            >
              <Image
                src="/images/3.png"
                alt="ola"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                priority
                width={500}
                height={300}
              />
            </Box>
          </Grid>
          <Grid size={{ sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Box>
              <Text type="h3">
                Conoce nuestros planes y escoge el que <span className="text-primary text-5xl">mejor se adapte a ti</span>
              </Text>
              <Text type="caption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reprehenderit perspiciatis perferendis praesentium recusandae,
                maiores, officia fugiat sint laboriosam corrupti atque quo iste expedita dolorum optio. Omnis iste commodi tempora!
              </Text>
            </Box>
          </Grid>
          <Grid size={{ sm: 12, md: 5 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
              <Text className="text-7xl font-bold">120</Text>
              <span className="text-primary text-xl pl-6 pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, provident.
              </span>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
              <Text className="text-7xl font-bold">120</Text>
              <span className="text-primary text-xl pl-6 pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, provident.
              </span>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
              <Text className="text-7xl font-bold">120</Text>
              <span className="text-primary text-xl pl-6 pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, provident.
              </span>
            </Box>
          </Grid>
        </Grid>
        {/* second part Stats */}
        <Grid container sx={{ py: '2em' }}>
          <Grid size={{ sm: 12, md: 4 }}>
            <Text type="h4" color="primary">
              test
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima voluptates, illo aperiam reprehenderit aliquid odit
              sit omnis impedit unde?
            </Text>
          </Grid>
          <Grid size={{ sm: 12, md: 4 }}>
            <Text type="h4" color="primary">
              test
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima voluptates, illo aperiam reprehenderit aliquid odit
              sit omnis impedit unde?
            </Text>
          </Grid>
          <Grid size={{ sm: 12, md: 4 }}>
            <Text type="h4" color="primary">
              test
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima voluptates, illo aperiam reprehenderit aliquid odit
              sit omnis impedit unde?
            </Text>
          </Grid>
        </Grid>
      </Box>
      {/* Map & Contact ___________________________________________________________________________ */}
      <Box className={s.block}>
        <ContactSection />
      </Box>
    </Layout>
  );
}
