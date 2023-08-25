import { Head } from '@/components/Head/Head';
import arrow from '@/assets/landingPage/hero/arrow.png';
import Hero from '../components/Home/Hero';
import { Box } from '@chakra-ui/react';
import Offer from '../components/Home/Offer';
import WhoWeAre from '../components/Home/WhoWeAre';
import CoursesStack from '../components/Home/CoursesStack';

export function Home() {
  return (
    <>
      <Head />
      <Box pos={'relative'}>
        <Box w={{ base: '93%', md: '90%' }} maxW={'8xl'} mx={'auto'}>
          <Hero />
          <Box
            width={{ base: '5rem', md: '8rem', lg: '13rem' }}
            left={'0'}
            top={{ base: '6.7rem', md: '10rem', lg: '14rem' }}
            pos={'absolute'}
          >
            <img width={'100%'} src={arrow} alt="arrow" />
          </Box>
          <Offer />
        </Box>
        <WhoWeAre />
        <CoursesStack />
      </Box>
    </>
  );
}
