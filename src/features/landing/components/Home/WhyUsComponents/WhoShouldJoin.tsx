import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import artist from '@/assets/landingPage/whyus/artist.png';
import check from '@/assets/landingPage/whyus/check.png';

function WhyUsItems({ value }: { value: string }) {
  return (
    <Flex alignItems={'center'} gap={'4'}>
      <Box maxW={{base:'1rem',md:'2rem'}} >
        <img src={check} alt="check" />
      </Box>

      <Text textStyle={'p-regular'}>{value}</Text>
    </Flex>
  );
}
export default function WhoShouldJoin() {
  return (
    <Flex
      flexDir={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'flex-start', md: 'center' }}
      justifyContent={'space-between'}
      gap={{ base: '8', md: '0' }}
    >
      <Stack order={{ base: 2, md: 1 }} spacing={{ base: '4', md: '6' }} alignItems={'flex-start'}>
        <Text as={'h2'} textStyle={'h3-bold'}>
          Who Should Join
        </Text>
        <Stack spacing={{ base: '4', md: '8' }}>
          <WhyUsItems value="Students wishing to accelerate their learning with a professional online course." />
          <WhyUsItems value="People who wish to transition to a tech career." />
          <WhyUsItems value="People who want to code and get high paying job." />
        </Stack>
        <Button variant={'primary'}>
          <Text textStyle={'p-regular'}> Join Now</Text>
        </Button>
      </Stack>
      <Box order={{ base: 1, md: 2 }} maxW={{ base: '20rem', lg: '30rem' }}>
        <img src={artist} alt="studyGroup" />
      </Box>
    </Flex>
  );
}
