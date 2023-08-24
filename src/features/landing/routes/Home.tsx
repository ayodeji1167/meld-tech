import { Head } from '@/components/Head/Head';
import React from 'react';
import Hero from '../components/Home/Hero';
import { Box } from '@chakra-ui/react';

export  function Home() {
  return (
    <>
      <Head />
      <Box>
        <Hero />
      </Box>
    </>
  );
}
