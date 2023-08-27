import { TextInput } from '@/components/Input/TextInput';
import { Box, Button, Flex, SimpleGrid, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import SupportBar from './SupportBar';

export default function GetInTouch() {
  return (
    <Box pt={'3rem'}>
      <Text textStyle={'h3-bold'}>Get in Touch</Text>
      <Flex gap={'8'} mt={'8'}>
        <Box flex={1.5}>
          <SimpleGrid gap={'6'} columns={2}>
            <Box>
              <TextInput label="First Name" name="firstName" placeHolder="Enter first name" />
            </Box>
            <Box>
              <TextInput label="Last Name" name="lastName" placeHolder="Last name" />
            </Box>
            <Box>
              <TextInput
                label="Phone Number"
                name="phoneNumber"
                placeHolder="Enter valid phone number"
              />
            </Box>
            <Box>
              <TextInput
                label="Email Address"
                name="email"
                type="email"
                placeHolder="Enter email address"
              />
            </Box>
          </SimpleGrid>
          <Box mt={'6'}>
            <Text mb={'2'} textStyle={'p-regular'}>
              Message
            </Text>

            <Textarea
              border={'none'}
              outline={'none'}
              focusBorderColor="transparent"
              _placeholder={{ color: 'rgba(87, 87, 87, 1)', fontSize: '14px' }}
              placeholder="Enter your message"
              bg={'rgba(246, 248, 251, 1)'}
            />
          </Box>

          <Button mt={'4'} variant={'primary'}>
            <Text textStyle={'p-regular'}>SEND</Text>
          </Button>
        </Box>
        <Box>
          <SupportBar />
        </Box>
      </Flex>
    </Box>
  );
}
