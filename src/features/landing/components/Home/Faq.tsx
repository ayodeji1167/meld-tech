import {
  Box,
  Center,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import strike from '@/assets/landingPage/whoweare/down-mark-line 2.png';

export default function Faq() {
  return (
    <Box
      w={{ base: '93%', md: '90%' }}
      mx={'auto'}
      py={{ base: '8', md: '20' }}
      bg={'rgba(246, 248, 251, 1)'}
    >
      <Center pb={'8'} flexDir={'column'} pos={'relative'}>
        <Text as={'h2'} textStyle={'h3-bold'}>
          FAQ{' '}
        </Text>
        <Box maxW={'4rem'} pos={'relative'} top={'-0.7rem'}>
          <img width={'100%'} src={strike} alt="strike" />
        </Box>
      </Center>

      <Stack spacing="4" maxW={{ base: '100%', md: '75%', lg: '60%' }} mx={'auto'}>
        {questions.map((item, index: number) => (
          <Accordion key={index} allowToggle>
            <AccordionItem
              borderRadius={'5px'}
              bg={'white'}
              border={'1px solid rgba(87, 87, 87, 0.48)'}
            >
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text textStyle={'h6-bold'}>{item.question}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text textStyle={'p-regular'}>{item.answer}</Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </Stack>
    </Box>
  );
}

const questions = [
  {
    question: `What courses does Meld Tech Academy offer?`,
    answer: `Meld Tech Academy offers a diverse range of tech courses, including programming languages (Java, Python, JavaScript), web development, data science, mobile app development, and more.`,
  },
  {
    question: `How can I enroll in a course?`,
    answer: `Enrolling in a course is simple. Just visit our website, browse the course catalog, and click on the "Enroll Now" button for your preferred course. Follow the instructions to complete the registration process.`,
  },
  {
    question: `Are the courses self-paced or instructor-led?`,
    answer: `We offer both self-paced and instructor-led courses. You can choose the learning format that best fits your schedule and learning preferences`,
  },
  {
    question: `What kind of support do learners receive during the course?`,
    answer: `Laerners recieve comprehensive support throughout their journey. Our instructor and support team are available to answer questions,provide clarifications, and offer guidance whenever needed`,
  },
  {
    question: `Are there any prerequisites for the courses?`,
    answer: `Prerequisites vary depending on the course. Some courses may require prior programming knowledge or familiarity with certain concepts. Check the course description for specific requirements.`,
  },
  {
    question: `How long do I have access to the course materials?`,
    answer: `After enrolling in a course, you will have lifetime access to the course materials. You can review and revisit content whenever you want`,
  },
  {
    question: `What type of certifications do learners receive upon course completion?`,
    answer: `Learners recieve a certificate of completion for each course they successfully finish. These certificate can be shared on professional networks and add value to your resume`,
  },
];
