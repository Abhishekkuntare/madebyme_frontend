import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/v.mp4';
import termsandcondition from '../../assets/docs/termsandcondition';

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar
          src="https://abhishekkuntare0210.vercel.app/images/abhi.jpg"
          boxSize={['40', '48']}
        />
        <Text children="Founder" opactiy={0.7} />
      </VStack>
      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children="Abhishek Kuntare" size={['md', 'xl']} />
        <Text
          children="Hello, Here is Abhishek kuntare im a Full-stack Developer. Any queries regarding to this web app please feel free to contact  me "
          textAlign={['center', 'left']}
        />
      </VStack>
    </Stack>
  );
};

const VideoPlayer = () => (
  <video
    autoPlay={true}
    loop
    controls
    src={introVideo}
    controlsList="nodownload nofullscreen noremoteplayback"
    disablePictureInPicture
    disableRemotePlayback
  />
);

const TandC = ({ termsandcondition }) => (
  <Box>
    <Heading
      children="Terms & Condition"
      size={'md'}
      textAlign={['center', 'left']}
      my={4}
    />

    <Box h={'sm'} p="4" overflowY={'scroll'}>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
        {termsandcondition}
      </Text>
      <Heading
        my={'4'}
        size="xs"
        children="Refund only applicable for cancellation within 7 Days "
      />
    </Box>
  </Box>
);
const About = () => {
  return (
    <Container maxW={'container.lg'} boxShadow={'lg'} padding="16">
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />

      <TandC termsandcondition={termsandcondition} />

      <HStack my={4} p={4}>
        <RiSecurePaymentFill />
        <Heading
          children={'Payment is secured by Razorpay'}
          textTransform="uppercase"
          fontFamily={'sans-serif'}
          size="xs"
        />
      </HStack>
    </Container>
  );
};

export default About;
