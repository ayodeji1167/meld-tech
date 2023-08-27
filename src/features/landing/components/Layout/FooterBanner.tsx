import { Box, Button, Center, Flex, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import illustration from '@/assets/landingPage/footer/illustration.png';

export default function FooterBanner() {
  return (
    <SimpleGrid
      maxW={'6xl'}
      mx={'auto'}
      alignItems={'center'}
      h={{ base: 'auto', md: '10rem' }}
      bg={'primary.500'}
      borderRadius={'10px'}
      px={{ base: '4%', md: '6%' }}
      py={{ base: '4', md: 0 }}
      columns={{ base: 1, md: 3 }}
      position={'relative'}
      top={'4rem'}
      w={{ base: '93%', md: '90%' }}
      gap={{base:'4',md:'1px'}}
    >
      <GridItem>
        <Text textAlign={{ base: 'center', md: 'left' }} textStyle={'h5-bold'} color={'white'}>
          Not Sure Which Course You Want To Start With?
        </Text>
      </GridItem>
      <GridItem>
        <Center>
          <Button bg={'white'} color={'primary.500'} minW={'10rem'} _hover={{ bg: 'white' }}>
            Free Consultation
          </Button>
        </Center>
      </GridItem>

      <GridItem display={{ base: 'none', md: 'block' }} alignSelf={'flex-end'}>
        <Center justifyContent={'flex-end'}>
          <Box width={{ base: '1', md: '9rem' }}>
            <img width={'100%'} src={illustration} alt="illustration" />
          </Box>
        </Center>
      </GridItem>
    </SimpleGrid>
  );
}
