import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import WhyUs from './WhyUsComponents/WhyUs';
import TopCourses from './WhyUsComponents/TopCourses';
import WhoShouldJoin from './WhyUsComponents/WhoShouldJoin';
import StudyTiming from './WhyUsComponents/StudyTiming';
import HowToStart from './WhyUsComponents/HowToStart';
import { motion, AnimatePresence } from 'framer-motion';

function SideBar({
  currentSlide,
  setCurrentSlide,
}: {
  currentSlide: string;
  setCurrentSlide: (data: string) => void;
}) {
  const sideItems = ['Why Us', 'Top Courses', 'Who Should Join', 'Study Timings', 'How To Start'];
  return (
    <Flex
      gap={{ base: '4', lg: '0' }}
      justifyContent={{ base: 'center', md: '' }}
      flexWrap={'wrap'}
      flexDirection={{ base: 'row', lg: 'column' }}
    >
      {sideItems.map((item: string, index: number) => {
        return (
          <Center
            p={{ base: '0.5rem 1rem', lg: '1rem 3rem' }}
            borderRadius={{ base: '2px', md: '4px' }}
            cursor={'pointer'}
            bg={{
              base: currentSlide === item ? 'primary.500' : 'rgba(246, 248, 251, 1)',
              lg: currentSlide === item ? 'primary.500' : 'white',
            }}
            color={currentSlide === item ? 'white' : ''}
            key={index}
            onClick={() => setCurrentSlide(item)}
          >
            <Text textStyle="p-regular">{item}</Text>
          </Center>
        );
      })}
    </Flex>
  );
}
export default function WhyUsSection() {
  const [currentSlide, setCurrentSlide] = useState('Why Us');
  const animationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  };

  return (
    <Flex
      flexDirection={{ base: 'column', lg: 'row' }}
      h={{ base: 'auto', lg: '70vh', xl: 'auto' }}
      gap={{ base: '2rem', md: '20' }}
      mt={{ base: '5rem', lg: '10rem' }}
      mb={'8'}
    >
      <Box >
        <SideBar currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      </Box>
      <Box flex={1} >
        <AnimatePresence mode="popLayout">
          {currentSlide === 'Why Us' && (
            <motion.div key={currentSlide} {...animationProps}>
              <WhyUs />
            </motion.div>
          )}
          {currentSlide === 'Top Courses' && (
            <motion.div key={currentSlide} {...animationProps}>
              <TopCourses />
            </motion.div>
          )}
          {currentSlide === 'Who Should Join' && (
            <motion.div key={currentSlide} {...animationProps}>
              <WhoShouldJoin />{' '}
            </motion.div>
          )}
          {currentSlide === 'Study Timings' && (
            <motion.div key={currentSlide} {...animationProps}>
              <StudyTiming />
            </motion.div>
          )}
          {currentSlide === 'How To Start' && (
            <motion.div key={currentSlide} {...animationProps}>
              <HowToStart />
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Flex>
  );
}

// 'exitBeforeEnter' is deprecated.ts(6385)
// index.d.ts(3486, 8): The declaration was marked as deprecated here.
// (property) AnimatePresenceProps.exitBeforeEnter?: boolean | undefined
// Replace with mode="wait"

// @deprecated — Replace with mode="wait"
