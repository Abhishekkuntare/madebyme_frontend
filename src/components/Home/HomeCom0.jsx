import { Container, chakra, Stack, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function HomeCom0() {
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
          Modern Work
          <Text
            display={{
              base: 'block',
              lg: 'inline',
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-l, red.400,purple.200)"
            fontWeight="extrabold"
          >
            {''} Experience-Based
          </Text>{' '}
          Learning Approach
        </chakra.h1>
        <Text color={'gray.500'} maxW={'3xl'}>
          At Made By Me, you learn and grow exactly how you would on a real job.
          You will start from the fundamentals, receive support from our mentors
          and community, and build your way to the top - through professional
          work-like Full-stack and Backend web development projects.
        </Text>
        <video
          className="home_video"
          style={{ borderRadius: '4%' }}
          width={'80%'}
          muted={true}
          loop={true}
          controls={false}
          autoPlay={true}
          src="https://cdn.dribbble.com/users/76454/screenshots/16530733/media/b7616e51c2988b9460c18cb239f7f234.mp4"
        />
        <Stack spacing={6} direction={'row'}>
          <Link to="/courses">
            <Button
              width={[300, 400]}
              bgGradient="linear(to-l, red.400,purple.200)"
              size={'lg'}
              _hover={{
                bgGradient: 'linear(to-r, red.200,purple.200)',
              }}
            >
              Explore Now
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
