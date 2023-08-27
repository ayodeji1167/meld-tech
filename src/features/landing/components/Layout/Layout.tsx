import { Box, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import FooterBanner from './FooterBanner';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack pos="relative" overflowX={'hidden'} minH={'100vh'}>
      <Header />

      {children}

      <Box position={'relative'}>
        <FooterBanner />
        <Footer />
      </Box>
    </Stack>
  );
};
