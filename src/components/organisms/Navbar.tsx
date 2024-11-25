// components/Navbar.tsx
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

// Array de links con submenús en el mismo archivo
const navLinks = [
  { label: 'Inicio', path: '/' },
  {
    label: 'Servicios',
    subLinks: [
      { label: 'Servicio 1', path: '/servicio1' },
      { label: 'Servicio 2', path: '/servicio2' },
    ],
  },
  {
    label: 'mas',
    subLinks: [
      { label: 'Servicio 1', path: '/servicio1' },
      { label: 'Servicio 2', path: '/servicio2' },
    ],
  },
  { label: 'Contacto', path: '/contacto' },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<{ [key: string]: HTMLElement | null }>({});

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, label: string) => {
    setAnchorEl((prev) => ({ ...prev, [label]: event.currentTarget }));
  };

  const handleMenuClose = (label: string) => {
    setAnchorEl((prev) => ({ ...prev, [label]: null }));
  };

  return (
    <AppBar position='fixed' elevation={0} className={styles.navbar}>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          <Link href='/' className={styles.logo}>
            Concentro
          </Link>
        </Typography>

        {/* Generar los links dinámicamente */}
        {navLinks.map((link) => (
          <div key={link.label}>
            {link.subLinks ? (
              <>
                {/* Link con submenú */}
                <Button
                  color='inherit'
                  variant='text'
                  aria-controls={`${link.label}-menu`}
                  aria-haspopup='true'
                  onClick={(event) => handleMenuOpen(event, link.label)}
                  className={styles.navLink}
                >
                  {link.label}
                  <ExpandMoreIcon className={`${styles.expandIcon} ${anchorEl[link.label] ? styles.open : ''}`} />
                </Button>
                <Menu
                  id={`${link.label}-menu`}
                  anchorEl={anchorEl[link.label]}
                  open={Boolean(anchorEl[link.label])}
                  onClose={() => handleMenuClose(link.label)}
                >
                  {link.subLinks.map((subLink) => (
                    <MenuItem key={subLink.label} onClick={() => handleMenuClose(link.label)}>
                      <Link href={subLink.path}>{subLink.label}</Link>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              // Link simple sin submenú
              <Button className={styles.navLink} color='inherit'>
                <Link href={link.path}>{link.label}</Link>
              </Button>
            )}
          </div>
        ))}

        {/* Ícono de menú para dispositivos móviles */}
        <IconButton edge='end' color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
