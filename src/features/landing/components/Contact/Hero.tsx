import React from 'react';
import group from '@/assets/contact/group.png';
import { Box, Flex, Text } from '@chakra-ui/react';
export default function Hero() {
  return (
    <Box
      w="100vw"
      backgroundImage={`url(${group})`} // Use template literals to include the URL
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      height={{ base: '20vh', md: '40vh' }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.5)" // Adjust the opacity as needed
      ></Box>
      <Flex height={'100%'} alignItems={'center'}>
        <Text ml={'4rem'} zIndex={2} pos={'relative'} color={'white'} textStyle={'h3-bold'}>
          Contact
        </Text>
      </Flex>

      {/* Your content goes here */}
    </Box>
  );
}
