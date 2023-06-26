import { chakra, Container, Stack, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function HomeCom1() {
  return (
    <Container maxW={'5xl'} mt={10}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <chakra.h1
          mb={6}
          fontSize={{
            base: '4xl',
            md: '6xl',
          }}
          fontWeight="bold"
          letterSpacing={{
            base: 'normal',
            md: 'tight',
          }}
          color="gray.900"
          _dark={{
            color: 'gray.100',
          }}
        >
          Immersive Work Ex-Based
          <Text
            display={{
              base: 'block',
              lg: 'inline',
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-l, yellow.400,red.200)"
            fontWeight="extrabold"
          >
            {''} Programs To Crack Jobs At The
          </Text>{' '}
          Fastest-Growing Companies
        </chakra.h1>
        <Text color={'gray.500'} maxW={'3xl'}>
          A course description is a brief summary of the significant learning
          experiences for a course. Course descriptions appear in individual
          Course Outlines and in the Program of Studies (POSs) for individual
          programs.
        </Text>
        <video
          className="home_video"
          style={{ borderRadius: '4%' }}
          width={'80%'}
          muted={true}
          loop={true}
          controls={false}
          autoPlay={true}
          src="https://cdn.dribbble.com/userupload/3229431/file/original-8bf924c0ebbd6c3f7e9ca3d80d46beca.mp4"
        />
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            bgGradient="linear(to-r, yellow.400,red.200)"
            _hover={{
              bgGradient: 'linear(to-r, purple.200,yellow.200)',
            }}
          >
            <Link to={'/request'}>Get Started</Link>
          </Button>
          <Button rounded={'full'} px={6}>
            <Link to={'/about'}>Learn more</Link>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
