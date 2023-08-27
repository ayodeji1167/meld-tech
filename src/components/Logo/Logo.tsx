import { Link, type LinkProps, Image, type ImageProps, Flex, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import logo from '@/assets/logo.png';

type LogoProps = ImageProps & {
  to?: string;
  text?: ReactNode;
  linkProps?: LinkProps;
  withText?: boolean;
  removeAcademy?: boolean;
};

export const Logo = (props: LogoProps) => {
  const { linkProps, to, withText } = props;

  function PlainLogo() {
    return (
      <Flex alignItems={'center'} gap={props.removeAcademy ? '4':''}>
        <Image src={logo} aria-label={`logo`} {...props} />
        {withText && (
          <Flex
            flexDirection={'column'}
            fontWeight={'bold'}
            fontFamily={`'Montserrat', 'sans-serif'`}
            textDecoration={'none'}
            justifyContent={'center'}
            fontSize={{ base: '15px', md: '18px' }}
          >
            <Text>MELDTECH</Text>
            {!props.removeAcademy && <Text>ACADEMY</Text>}
          </Flex>
        )}
      </Flex>
    );
  }

  function LinkLogo() {
    return (
      <Link
        textDecoration={'none !important'}
        _hover={{ textDecoration: 'none !important' }}
        as={ReactLink}
        to={to}
        {...linkProps}
      >
        <PlainLogo />
      </Link>
    );
  }

  if (to) {
    return <LinkLogo />;
  }

  return <PlainLogo />;
};
