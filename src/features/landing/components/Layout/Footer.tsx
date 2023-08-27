import { Logo } from '@/components/Logo/Logo';
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import facebook from '@/assets/landingPage/footer/entypo-social_facebook-with-circle.png';
import instagram from '@/assets/landingPage/footer/entypo-social_instagram-with-circle.png';
import linkedin from '@/assets/landingPage/footer/entypo-social_linkedin-with-circle.png';
import twitter from '@/assets/landingPage/footer/entypo-social_twitter-with-circle.png';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

function FooterStack({ header, navs }: { header: string; navs: Array<string> }) {
  return (
    <Stack align={'flex-start'}>
      <ListHeader>{header}</ListHeader>
      {navs.map((item, index) => (
        <Text key={index} textStyle={'p-regular'}>
          {item}
        </Text>
      ))}
    </Stack>
  );
}
const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text textStyle={'h6-semibold'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={'rgba(246, 248, 251, 1)'} pt={'3rem'}>
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo withText removeAcademy />
            </Box>
            <Text textStyle={'p-regular'}>
              Meld Tech Academy is a premier tech education platform empowering learners with
              cutting-edge skills. Our expert-led courses and hands-on approach prepare you for
              success in the dynamic tech landscape.
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <Box>
                  <img src={facebook} alt={'facebook'} />
                </Box>
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <Box>
                  <img src={instagram} alt={'instagram'} />
                </Box>
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <Box>
                  <img src={linkedin} alt={'linkedin'} />
                </Box>
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <Box>
                  <img src={twitter} alt={'linkedin'} />
                </Box>
              </SocialButton>
            </Stack>
          </Stack>
          <FooterStack
            header="Useful Links"
            navs={['Career Support', 'About Us', 'Terms and Conditions', 'Privacy Policy', 'FAQ']}
          />
          <FooterStack
            header="Our Courses"
            navs={[
              'Full-Stack Web Developement',
              'Front-End Web Development',
              'Mobile Developement',
              'UI/UX Design',
              'Project Management',
            ]}
          />
          <FooterStack
            header="More Courses"
            navs={[
              'Software Proposal Writing',
              'Java Programming',
              'Cloud Computing and AWS Essentials',
              'Data Analysis and Visualization',
              'Machine Learning Fundamentals',
            ]}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
