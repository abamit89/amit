import Link from 'next/link';
import { Avatar, Box, Container, NavLink } from 'theme-ui';

import { Logo } from '../Icons/Logo';
import { useState, useEffect } from 'react';
import  avatar  from '../../../__mocks__/user.json';

export const Menu = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div style={{ display: visible ? 'block' : 'none' }}>

  <Box
    as="menu"
    sx={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      background: 'rgb(255, 255, 255)',
      boxShadow: 'rgba(0, 0, 0, 0.4) 0 0 10px',
      display: 'flex',
    }}
  >
    <Container p={10} sx={{ flex: '1 auto' }}>
      <NavLink as={Link} href="/en/US">
        <Logo />
      </NavLink>
      <NavLink as={Link} href="/en/US/product" pl={20}>
        Product
      </NavLink>
      <NavLink as={Link} href="/en/US/about" pl={20}>
        About
      </NavLink>
    </Container>
    <Avatar
      data-testid="usericon"
      sx={{
        margin: 10,
        width: 48,
        height: 48,
        padding: 1,
        backgroundColor: '#d8d8d8',
        backgroundImage: `url(${avatar})`,
      }}
    />
  </Box>
  </div>
)};
