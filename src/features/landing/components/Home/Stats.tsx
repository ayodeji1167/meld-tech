import { Box, Flex, GridItem, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import user from '@/assets/landingPage/stats/user.png';
import laptop from '@/assets/landingPage/stats/teacher.png';
import interact from '@/assets/landingPage/stats/diary.png';
import certificate from '@/assets/landingPage/stats/certificate.png';

function StatsItem({ image, value, name }: { image: string; value: string; name: string }) {
  return (
    <Flex alignItems={'center'} gap={'4'}>
      <Box w={{ base: '2rem', lg: '3rem' }}>
        <img height={'100%'} width={'100%'} src={image} alt="img" />
      </Box>
      <Stack color={'white'} spacing={'0'}>
        <Text fontWeight={'bold'} fontSize={{ base: '20px', md: '28px' }}>
          {value}
        </Text>
        <Text>{name}</Text>
      </Stack>
    </Flex>
  );
}
export default function Stats() {
  return (
    <Box py={'4'} bg={'primary.500'}>
      <SimpleGrid
        w={{ base: '93%', md: '90%' }}
        maxW={'7xl'}
        mx={'auto'}
        columns={{ base: 2, md: 4 }}
      >
        <GridItem>
          <StatsItem name="Students Enrolled" value="1,806" image={user} />
        </GridItem>
        <GridItem>
          <StatsItem name="Course Instructors" value="20" image={laptop} />
        </GridItem>
        <GridItem>
          <StatsItem name="Interactive Courses" value="20" image={interact} />
        </GridItem>
        <GridItem>
          <StatsItem name="Course Certificates" value="80" image={certificate} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
