'use client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Box,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styles from '~/styles/components/organisms/Navbar.module.scss';
import Link from 'next/link';
import { useState } from 'react';

// Array de links con submenús
const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Empresas', path: '/' },
  { label: 'Renta & Venta', path: '/contacto' },
  { label: 'Torre Amstrong', path: '/contacto' },
  { label: 'Contacto', path: '/contacto', subLinks: [{ label: '', path: '' }] },
  // {
  //   label: "Servicios",
  //   subLinks: [
  //     { label: "Servicio 1", path: "/servicio1" },
  //     { label: "Servicio 2", path: "/servicio2" },
  //   ],
  // },
  // {
  //   label: "Más",
  //   subLinks: [
  //     { label: "Servicio 3", path: "/servicio3" },
  //     { label: "Servicio 4", path: "/servicio4" },
  //   ],
  // },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | false>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detecta pantallas pequeñas (menor a "md")

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAccordionToggle = (panel: string) => {
    setExpanded((prev) => (prev === panel ? false : panel));
  };

  return (
    <AppBar position="fixed" elevation={0} className={styles.navbar}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href="/" className={styles.logo}>
            Concentro
          </Link>
        </Typography>

        {/* Menú móvil */}
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleMobileMenu}>
              <MenuIcon sx={{ fontSize: '1.5em' }} />
            </IconButton>
            <Drawer anchor="right" open={mobileOpen} onClose={toggleMobileMenu}>
              <Box sx={{ width: 250, py: 2 }}>
                <List>
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.subLinks ? (
                        <Accordion expanded={expanded === link.label} onChange={() => handleAccordionToggle(link.label)}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${link.label}-content`}
                            id={`${link.label}-header`}
                          >
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                              {link.label}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <List>
                              {link.subLinks.map((subLink) => (
                                <ListItem key={subLink.label} component={Link} href={subLink.path} onClick={toggleMobileMenu}>
                                  <ListItemText primary={subLink.label} />
                                </ListItem>
                              ))}
                            </List>
                          </AccordionDetails>
                        </Accordion>
                      ) : (
                        <ListItem component={Link} href={link.path} onClick={toggleMobileMenu}>
                          <ListItemText primary={link.label} />
                        </ListItem>
                      )}
                    </div>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          // Menú de escritorio
          <>
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.subLinks ? (
                  <Button
                    color="inherit"
                    variant="text"
                    aria-controls={`${link.label}-menu`}
                    aria-haspopup="true"
                    className={styles.navLink}
                  >
                    {link.label}
                  </Button>
                ) : (
                  <Button className={styles.navLink} color="inherit">
                    <Link href={link.path}>{link.label}</Link>
                  </Button>
                )}
              </div>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
