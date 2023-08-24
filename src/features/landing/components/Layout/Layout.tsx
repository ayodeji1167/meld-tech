import { Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack pos="relative" overflowX={'hidden'} minH={'100vh'} justifyContent={'space-between'}>
      <Header />

      {children}

      <Footer />
    </Stack>
  );
};
