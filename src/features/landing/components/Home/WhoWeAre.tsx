import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import group from '@/assets/landingPage/whoweare/Group.png';
import check from '@/assets/landingPage/whoweare/akar-icons_circle-check-fill.png';
import strike from '@/assets/landingPage/whoweare/down-mark-line 2.png';

function WhoWeAreItems({ value }: { value: string }) {
  return (
    <Flex alignItems={'center'} gap={'4'}>
      <Box>
        <img src={check} alt="check" />
      </Box>

      <Text textStyle={'p-regular'}>{value}</Text>
    </Flex>
  );
}
export default function WhoWeAre() {
  return (
    <Box
      mt={{ base: '3rem', md: '4rem' }}
      py={{ base: '3rem', md: '4rem' }}
      bg={'rgba(246, 248, 251, 1)'}
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={'8'}
        justifyContent={'space-between'}
        w={{ base: '93%', md: '90%' }}
        maxW={'7xl'}
        mx={'auto'}
        alignItems={{ base: 'flex-start' }}
      >
        <Box flex={1}>
          <img src={group} alt="group" />
        </Box>
        <Box mt={'6'} ml={{ base: '0', md: '8' }} flex={1}>
          <Box position={'relative'}>
            <Text as={'h2'} textStyle={'h3-bold'}>
              Who We Are
            </Text>
            <Box pos={'relative'} top={'-0.9rem'}>
              <img src={strike} alt="strike" />
            </Box>
          </Box>
          <Text my={{ base: '4', md: '8' }} textStyle={'p-regular'}>
            At Meld Tech Academy, we are passionate about empowering individuals with the knowledge
            and skills to thrive in the ever-evolving tech industry. Our team of experienced
            instructors is committed to providing high-quality, hands-on training that prepares you
            for real-world challenges.
          </Text>
          <Stack spacing={{ base: '4', md: '6' }}>
            <WhoWeAreItems value="Industry-Leading Instructors" />
            <WhoWeAreItems value="Diverse Course Offerings" />
            <WhoWeAreItems value="Hands-On Learning Experience" />
            <WhoWeAreItems value="Supportive Learning Community" />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
