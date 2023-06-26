import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiLinkExternal } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { courseRequest } from '../../redux/actions/others';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const Request = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(courseRequest(email, name, course));
  };

  const {
    loading,
    error,
    message: stateMessage,
  } = useSelector(state => state.other);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, stateMessage, error]);

  return (
    <Container h={'92vh'}>
      <VStack h="full" justifyContent={'center'} spacing={16}>
        <Heading children="Request New Course" />{' '}
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box marginY={4}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter Name"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={4}>
            <FormLabel htmlFor="email" children="Email address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={4}>
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              required
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain the course...."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button
            isLoading={loading}
            my={4}
            colorScheme={'yellow'}
            type="submit"
          >
            Send Mail
          </Button>
          <Box my={'4'}>
            See Available Courses!{' '}
            <Link to={'/courses'}>
              <Button colorScheme={'yellow'} variant="link">
                <BiLinkExternal />
              </Button>
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Request;
