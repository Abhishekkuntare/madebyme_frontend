import {
  Badge,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { ImShift } from 'react-icons/im';
import { CgMouse } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/course';
import toast from 'react-hot-toast';
import { addToPlaylist } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';
import { chakra } from '@chakra-ui/react';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlayListHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        size={'sm'}
        textAlign={['center', 'left']}
        maxW="200px"
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />
        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`lectures - ${lectureCount}`}
        textTransform="uppercase"
      />
      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          isLoading={loading}
          variant={'ghost'}
          colorScheme="yellow"
          onClick={() => addToPlayListHandler(id)}
        >
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState(' ');

  const dispatch = useDispatch();

  const addToPlayListHandler = async courseId => {
    await dispatch(addToPlaylist(courseId));
    dispatch(loadUser());
  };

  const categories = [
    'Web Development',
    'App Development ',
    'Data Structure & Algorithm',
    'Data Science',
    'Artificial Intellegence',
    'Game Development',
  ];

  const { loading, error, courses, message } = useSelector(
    state => state.course
  );
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  });

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));
  }, [category, keyword, dispatch, error, message]);

  return (
    <>
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
            Work-experience based learning
            <Text
              display={{
                base: 'block',
                lg: 'inline',
              }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-l, blue.400,orange.200)"
              fontWeight="extrabold"
            >
              programs to land your
            </Text>{' '}
            dream tech job
          </chakra.h1>
          <Text color={'gray.500'} maxW={'3xl'}>
            <Badge variant={'outline'}>Build</Badge> professional projects like
            the top 1% tech professionals.{' '}
            <Badge variant={'outline'}>Master</Badge> the latest
            Fullstack/Backend/Automation tech with real work-ex.{' '}
            <Badge variant={'outline'}>Crack</Badge> your dream role at the best
            tech companies
          </Text>
          <video
            className="home_video"
            style={{ borderRadius: '4%' }}
            muted={true}
            loop={true}
            controls={false}
            autoPlay={true}
            src="https://cdn.dribbble.com/userupload/7073433/file/original-090a7a2b927fce657d5e5e6b971235b9.mp4"
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
      <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
        <Heading children="All Courses" m={8} />
        <Input
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="Search a course..."
          type={'text'}
          focusBorderColor="yellow.500"
        />
        <Text mt={5} color={'yellow.600'} display={'flex'} alignItems="center">
          use (<ImShift /> + <CgMouse />) to scroll
        </Text>
        <HStack
          overflowX={'auto'}
          paddingY="8"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {categories.map((item, index) => (
            <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
              <Text children={item} />
            </Button>
          ))}
        </HStack>
        <Stack
          direction={['column', 'row']}
          flexWrap="wrap"
          justifyContent={['flex-start', 'space-evenly']}
          alignItems={['center', 'flex-start']}
        >
          {courses.length > 0 ? (
            courses.map(item => (
              <Course
                key={item._id}
                title={item.title}
                description={item.description}
                views={item.views}
                imageSrc={item.poster.url}
                id={item._id}
                creator={item.createdBy}
                lectureCount={item.noOfVideos}
                addToPlayListHandler={addToPlayListHandler}
                loading={loading}
              />
            ))
          ) : (
            <Heading mt={4} children="Courses Not Found !" />
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Courses;
