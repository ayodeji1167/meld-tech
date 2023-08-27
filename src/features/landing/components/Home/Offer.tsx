import React from 'react';
import calender from '@/assets/landingPage/hero/calender.png';
import camera from '@/assets/landingPage/hero/camera.png';
import phone from '@/assets/landingPage/hero/phone.png';
import { Box, Flex, GridItem, SimpleGrid, Stack, Text } from '@chakra-ui/react';

export default function Offer() {
  return (
    <SimpleGrid pt={'8'} gap={'6'} columns={{ base: 1, lg: 3 }}>
      {offers.map((offer, index) => (
        <GridItem key={index}>
          <Flex
            py={{ base: '8', lg: '12' }}
            px={'4'}
            gap={{ base: '4', md: '8' }}
            alignItems={{ base: 'flex-start', lg: 'center' }}
            shadow={'0px 4px 10px 0px rgba(0, 0, 0, 0.25)   '}
            borderRadius={'10px'}
            direction={{ base: 'column', lg: 'row' }}
          >
            <Box maxW={{ base: '2rem', md: '3rem' }}>
              <img width={'100%'} src={offer.image} alt="offer" />
            </Box>
            <Stack>
              <Text textStyle={'h5-bold'} fontSize={{ base: '15px', md: '18px' }}>
                Exclusive personal 1 on 1 session with mentors
              </Text>
              <Text textStyle={'p-regular'}>
                Schedule 1-on-1 appointments with your mentor to work through any current challenges
              </Text>
            </Stack>
          </Flex>
        </GridItem>
      ))}
    </SimpleGrid>
  );
}

const offers = [
  {
    image: camera,
    title: 'Exclusive personal 1 on 1 session with mentors',
    desc: 'Schedule 1-on-1 appointments with your mentor to work through any current challenges',
  },
  {
    image: calender,
    title: 'Completely flexible schedule',
    desc: 'The lessons, projects, exercises, and results can all be scheduled according to your availability and ease',
  },
  {
    image: phone,
    title: 'Fully equipped support system',
    desc: 'We got your back! our chat portal is always there to answer all your questions, review your tasks, and provide feedback.',
  },
];
