import { Box, GridItem, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import note from '@/assets/landingPage/whyus/note.png';
import garduation from '@/assets/landingPage/whyus/garduation.png';
import secetary from '@/assets/landingPage/whyus/secetary.png';
import dollar from '@/assets/landingPage/whyus/dollar.png';
import arrow from '@/assets/landingPage/whyus/arrow.png';

function HowToStartItem({
  image,
  arrowUp,
  title,
  description,
  hasArrow,
}: {
  image: string;
  arrowUp: boolean;
  hasArrow: boolean;
  title: string;
  description: string;
}) {
  return (
    <Stack spacing={{ base: '4', lg: '8' }} alignItems={'center'} position={'relative'}>
      <Box maxW={{ base: '3rem', md: '4rem', lg: '8rem' }}>
        <img src={image} alt={image} />
      </Box>
      {hasArrow && (
        <Box
          top={arrowUp ? '-4rem' : ''}
          bottom={!arrowUp ? '4rem' : ''}
          right={'-4rem'}
          maxW={{ base: '6rem', lg: '8rem' }}
          pos={'absolute'}
          display={{ base: 'none', lg: 'block' }}
          transform={!arrowUp ? 'scaleY(-1)' : ''}
        >
          <img src={arrow} alt={image} />
        </Box>
      )}

      <Text textStyle={'h6-bold'}>{title}</Text>
      <Text textAlign={'center'} textStyle={'p-regular'}>
        {description}
      </Text>
    </Stack>
  );
}
export default function HowToStart() {
  return (
    <Box>
      <Text as={'h2'} textStyle={'h3-bold'}>
        How To Start
      </Text>
      <Text maxW={{ base: '100%', md: '70%', lg: '40%' }} textStyle={'p-regular'}>
        Get started by registering yourself to get yourself enrolled to courses where you will be
        learning real employable skills that top companies want{' '}
      </Text>

      <SimpleGrid mt={'8'} gap={'12'} columns={{ base: 1, md: 2, lg: 4 }}>
        <GridItem>
          <HowToStartItem
            image={note}
            title="Apply"
            description="Apply for an enrollment to our courses by registering here to secure your spot!"
            arrowUp
            hasArrow
          />
        </GridItem>

        <GridItem>
          <HowToStartItem
            image={garduation}
            title="Submit your info"
            description="Submit all your necessary information that are needed for the registration of the course!"
            arrowUp={false}
            hasArrow
          />
        </GridItem>

        <GridItem>
          <HowToStartItem
            image={secetary}
            title="Wait for our call"
            description="Waiit for us to get back to you with the confirmation and all the course related details!"
            arrowUp
            hasArrow
          />
        </GridItem>

        <GridItem>
          <HowToStartItem
            image={dollar}
            title="Pay fees"
            description="Pick a starting date and pay the tuition fee for the course to earn a spot in the class!"
            arrowUp
            hasArrow={false}
          />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
