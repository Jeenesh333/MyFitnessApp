import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useParallax } from 'react-scroll-parallax';

import HeroBannerImage from '../assets/images/banner_1.png';

  const HeroBanner = () => {
  
    const parallax = useParallax({
      translateY: [0, 100],
    });




  return (
    <Box sx={{ mt: { lg: '100px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography ref = {parallax.ref} fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '160px' }}>
      Progress Not <br/> &nbsp;&nbsp;Perfection
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
  );
};

export default HeroBanner;