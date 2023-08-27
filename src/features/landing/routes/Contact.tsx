import { Head } from '@/components/Head/Head';
import { Box } from '@chakra-ui/react';
import React from 'react';
import Hero from '../components/Contact/Hero';
import GetInTouch from '../components/Contact/GetInTouch';

export function Contact() {
  return (
    <Box pos={'relative'}>
      <Head title="Meldtech Contact" />
      <Hero />
      <Box w={{ base: '93%', md: '90%' }} maxW={'7xl'} mx={'auto'}>
        <GetInTouch />
      </Box>
    </Box>
  );
}
