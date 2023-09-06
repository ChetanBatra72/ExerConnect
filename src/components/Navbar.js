import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 10px 0px 5px' }} />
    <span classname="navText" style={{ fontSize:'36px', color:'#blue'  ,fontWeight:'700',fontFamily:'sans-serif'  , height: '48px', margin: '0px 0px' }}>
      ExerConnect
    </span>

    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212', fontWeight:'8000' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
