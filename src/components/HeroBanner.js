import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/ban7.webp';

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' },
      position: 'relative',
      p: '20px',
    }}
  >
    <Typography color="black" fontWeight="600" fontSize="45px">
      Welcome to Fitness Club
    </Typography>
    <Typography
      fontWeight={900}
      sx={{
        fontSize: { lg: '48px', xs: '20px' },
        lineHeight: '1.5',
        textAlign: 'left',
        fontFamily: 'roboto',
        // fontFamily: 'Arial, sans-serif',
        color: '#71797E',
      }}
      mb="20px"
      mt="30px"
    >
      Sweat, Smile & Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized for you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: '45px',
          textDecoration: 'none',
          width: '200px',
          textAlign: 'center',
          background: '#FF2625',
          padding: '14px',
          fontSize: '22px',
          textTransform: 'none',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner"  className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
