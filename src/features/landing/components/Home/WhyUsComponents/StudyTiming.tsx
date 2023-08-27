import { Box, Divider, GridItem, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import chair from '@/assets/landingPage/whyus/chair.png';
import cresent from '@/assets/landingPage/whyus/cresent.png';
import sun from '@/assets/landingPage/whyus/sun.png';

function StudyTimingItem({
  image,
  timeRange,
  day,
}: {
  image: string;
  timeRange: string;
  day: string;
}) {
  return (
    <Stack
      alignItems={'center'}
      borderRadius={'10px'}
      p="8"
      h={{ base: '13rem', md: '17rem' }}
      shadow={{
        base: ' 2px 4px 3px 0px rgba(0, 0, 0, 0.1)',
        md: '0px 4px 50px 0px rgba(0, 0, 0, 0.25)',
      }}
      spacing={{ base: '4', md: '8' }}
    >
      <Box maxW={{ base: '2.5rem', md: '3.5rem' }}>
        <img width={'100%'} src={image} alt={'image'} />
      </Box>
      <Text fontWeight={'bold'}>{day}</Text>
      <Divider />
      <Text textStyle={'p-bold'} fontWeight={'bold'}>
        {timeRange}
      </Text>
    </Stack>
  );
}

export default function StudyTiming() {
  return (
    <Box>
      <Text as={'h2'} textStyle={'h3-bold'}>
        Study Timings
      </Text>
      <Text textStyle={'p-regular'}>Pick a time to study that is most convinient to you.</Text>
      <SimpleGrid mt={'8'} gap={'8'} columns={{ base: 1, md: 2, lg: 3 }}>
        <GridItem>
          <StudyTimingItem image={sun} day="Morning Time" timeRange="9-12" />
        </GridItem>
        <GridItem>
          <StudyTimingItem image={chair} day="Afternoon" timeRange="12-4" />
        </GridItem>
        <GridItem>
          <StudyTimingItem image={cresent} day="Evening" timeRange="4-6" />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
