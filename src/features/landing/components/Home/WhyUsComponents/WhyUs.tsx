import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import studyGroup from '@/assets/landingPage/whyus/studygroup.png';
import check from '@/assets/landingPage/whyus/check.png';

function WhyUsItems({ value }: { value: string }) {
  return (
    <Flex alignItems={'center'} gap={'4'}>
      <Box maxW={{ base: '1rem', md: '2rem' }}>
        <img width={'100%'} src={check} alt="check" />
      </Box>

      <Text textStyle={'p-regular'}>{value}</Text>
    </Flex>
  );
}
export default function WhyUs() {
  return (
    <Flex
      flexDir={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'flex-start', md: 'center' }}
      justifyContent={'space-between'}
      gap={{ base: '8', md: '0' }}
    >
      <Stack order={{ base: 2, md: 1 }} spacing={{ base: '4', md: '6' }} alignItems={'flex-start'}>
        <Text as={'h2'} textStyle={'h3-bold'}>
          Why Us
        </Text>
        <Stack spacing={{ base: '4', md: '8' }}>
          <WhyUsItems value="Expert Instructors and Industry Insights" />
          <WhyUsItems value="Practical Learning and Real-World Skills" />
          <WhyUsItems value="Diverse Course Offerings and Tailored Pathways" />
          <WhyUsItems value="Supportive Community and Career Assistance" />
        </Stack>
        <Button variant={'primary'}>
          {' '}
          <Text textStyle={'p-regular'}> Apply Now</Text>
        </Button>
      </Stack>
      <Box order={{ base: 1, md: 2 }} maxW={{ base: '20rem', lg: '30rem' }}>
        <img src={studyGroup} alt="studyGroup" />
      </Box>
    </Flex>
  );
}
