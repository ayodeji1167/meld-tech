import { Box, Center, Flex, Stack, Text } from '@chakra-ui/react';
import mail from '@/assets/contact/mail.png';
import dial from '@/assets/contact/dial.png';
import location from '@/assets/contact/location.png';
function SpItem({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <Flex alignItems={'flex-start'} gap={'6'}>
      <Box>
        <img src={image} alt="title" />
      </Box>
      <Stack>
        <Text textStyle={'p-bold'}>{title}</Text>
        <Text textStyle={'p-regular'}>{description}</Text>
      </Stack>
    </Flex>
  );
}
export default function SupportBar() {
  return (
    <Center bg={'rgba(246, 248, 251, 1)'} p={'6'} shadow={'0px 4px 10px 0px rgba(0, 0, 0, 0.25)'}>
      <Stack spacing={'6'}>
        <Text textStyle={'h3-bold'} color={'primary.500'}>
          HQ Support Contact
        </Text>
        <Stack spacing={'6'}>
          <SpItem image={dial} title="Phone" description="+2347034171896" />
          <SpItem image={mail} title="Email" description="meldtechofficial@gmail.com" />
          <SpItem
            image={location}
            title="Location"
            description="Abbot Kinney Blvd. New York, USA-5785"
          />
        </Stack>
      </Stack>
    </Center>
  );
}
