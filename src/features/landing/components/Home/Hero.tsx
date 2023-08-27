import { Box, Button, Center, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import heroImg from '@/assets/landingPage/hero/hero-img.png';
import rate from '@/assets/landingPage/hero/rate.png';

export default function Hero() {
  return (
    <Flex
      gap={{ base: '2rem', lg: 'none' }}
      pt={{ base: '8', md: '16' }}
      direction={{ base: 'column', lg: 'row' }}
     
      position={'relative'}
    >
      <Stack alignItems={'flex-start'} spacing={{ base: '4', md: '6' }} flex={1}>
        <Text textStyle={'h5-semibold'} color={'primary.500'}>
          Unlock your potential
        </Text>
        <Text
          textStyle={'h1-bold'}
          fontSize={{ base: '30px', md: '50px', lg: '63px' }}
          lineHeight={{ base: '2.5rem', md: '3.5rem', lg: '4rem' }}
        >
          Unlock Your Potential with Meld Tech Academy
        </Text>
        <Text textStyle={'p-regular'}>
          Learn in-demand tech skills from industry experts and build a successful career in
          software engineering.
        </Text>

        <Button variant={'primary'}><Text textStyle={"p-regular"}> Apply Now</Text></Button>
      </Stack>

      <Box flex={1.1} pos={'relative'}>
        <Box pos={'relative'}>
          <img width={'100%'} src={heroImg} alt="hero" />
        </Box>
        <Box left={'5rem'} top={'-5rem'} display={{ base: 'none', lg: 'block' }} pos={'relative'}>
          <Center
            boxShadow={' 0px 4px 50px 0px rgba(0, 0, 0, 0.25)'}
            borderRadius={'8px'}
            bg={'white'}
            h={'52'}
            w={'44'}
            pos={'relative'}
            zIndex={-1}
          >
            <Text
              textAlign={'center'}
              px={'8'}
              textStyle={'h4-semibold'}
              fontSize={{ base: '16px', md: '18px' }}
            >
              Top Rated Instructors
            </Text>
          </Center>
          <Box w={'9rem'} top={'-4rem'} left={'0.5rem'} pos={'absolute'}>
            <img width={'100%'} src={rate} alt="hero" />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
