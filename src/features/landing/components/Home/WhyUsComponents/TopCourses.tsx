import { Box, Flex, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import node from '@/assets/landingPage/stackimages/node.png';
import html from '@/assets/landingPage/stackimages/html.png';
import css from '@/assets/landingPage/stackimages/css.png';
import javascript from '@/assets/landingPage/stackimages/javascript.png';
import mongodb from '@/assets/landingPage/stackimages/mongodb.png';
import photoshop from '@/assets/landingPage/stackimages/photoshop.png';
import python from '@/assets/landingPage/stackimages/python.png';
import react from '@/assets/landingPage/stackimages/react.png';
import adobe from '@/assets/landingPage/stackimages/adobe.png';
import ai from '@/assets/landingPage/stackimages/ai.png';
import figma from '@/assets/landingPage/stackimages/figma.png';
import flutter from '@/assets/landingPage/stackimages/flutter.png';
import dart from '@/assets/landingPage/stackimages/dart.png';
function CourseCard({
  images,
  title,
  description,
}: {
  images: Array<string>;
  title: string;
  description: string;
}) {
  return (
    <Box
      px="6"
      pt={{ base: '4', md: '8' }}
      borderRadius={'10px'}
      h={{ base: '17rem', md: '20rem' }}
      shadow={{
        base: ' 2px 4px 3px 0px rgba(0, 0, 0, 0.1)',
        md: '0px 4px 50px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Flex flexWrap={'wrap'} gap={'4'} my={'8'}>
        {images.map((item: string, index: number) => {
          return (
            <Box w="1.1rem" key={index}>
              <img width={'100%'} src={item} alt={'item'} />
            </Box>
          );
        })}
      </Flex>

      <Text
        mt={'4'}
        mb={'2'}
        fontWeight={'bold'}
        textStyle={'h4-bold'}
        fontSize={{ base: '14px', md: '18px' }}
      >
        {title}
      </Text>
      <Text textStyle={'p-regular'}>{description}</Text>
    </Box>
  );
}

export default function TopCourses() {
  return (
    <Box>
      <Text mb={{ base: '2', md: '8' }} as={'h2'} textStyle={'h3-bold'}>
        Top Courses
      </Text>
      <SimpleGrid gap={'2rem'} columns={{ base: 1, md: 2, lg: 3 }}>
        <GridItem>
          <CourseCard
            images={[html, css, javascript, react, node, mongodb, python]}
            description={`We will teach you  how to implement modern & real-life websites and web apps with tech-stacks like MERN stack that are on high demand - HTML, CSS, Javascript, React, Python, Node Js, MongoDB, and more...`}
            title="Web Development"
          />
        </GridItem>
        <GridItem>
          <CourseCard
            images={[flutter, dart]}
            description={`We will teach you how to implement modern Mobile Apps with on-demand cross-platform development kits like React Native, Flutter, Dart, and many more...`}
            title="Mobile Development"
          />
        </GridItem>
        <GridItem>
          <CourseCard
            images={[figma, adobe, ai, photoshop]}
            description={`We will teach you how to implement UI UX Designs for web apps, websites and mobile apps with Figma, Adobe XD, Adobe Photoshop, Illustrator, and InDesign, all that you need in modern times of UI/UX era`}
            title="UI/UX Design"
          />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
