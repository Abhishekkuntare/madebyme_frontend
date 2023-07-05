import { chakra, Stack, Text, Container, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <>
      {' '}
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
            Made By Me students get
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
              {' '}
              an average salary hike of 89%
            </Text>{' '}
            after graduating from here
          </chakra.h1>
          <Text color={'gray.500'} maxW={'3xl'}>
            A course description is a brief summary of the significant learning
            Work in great companies with better compensation after your time at
            Made By Me .
          </Text>
          <video
            className="home_video"
            style={{ borderRadius: '4%' }}
            width={'100%'}
            muted={true}
            loop={true}
            controls={false}
            autoPlay={true}
            src="https://cdn.dribbble.com/userupload/4393085/file/original-17be7a045d1a75327adee812f92408c8.mp4"
          />

          <Stack spacing={6} direction={'row'}>
            <Button
              px={6}
              bgGradient="linear(to-r, yellow.400,red.200)"
              _hover={{
                bgGradient: 'linear(to-r, purple.200,yellow.200)',
              }}
            >
              <Link to={'/subscribe'}>Get Subscription</Link>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Pricing;
