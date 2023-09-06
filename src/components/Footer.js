import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="40px" bgcolor="#333" color="#fff" paddingY="20px">
    <Stack gap="10px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="20px">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px' }} />
        <Typography variant="h6" sx={{ fontFamily: 'Arial, sans-serif',  fontSize:'22px', fontWeight: 'bold', color: '#FFA500' }}>ExerConnect</Typography>
      </div>
    </Stack>
    <Typography variant="h5" sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }} mt="10px" textAlign="center" pb="10px">
      Built by: <span style={{ fontFamily: 'Georgia, serif', color: '#FFA500' }}>Chetan Batra</span>
    </Typography>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a href="https://www.linkedin.com/in/chetan-batra-17b8731b7/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', color: 'blue', fontSize: '20px' }}>
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
      </a>
      <a href="https://github.com/ChetanBatra72" target="_blank" rel="noopener noreferrer" style={{ color: 'black', fontSize: '20px' }}>
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
    </div>
  </Box>
);

export default Footer;
