import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PayementSuccess = () => {
  return (
    <Container h={'92vh'} p={16}>
      <Heading my={8} textAlign="center">
        {' '}
        You have Pro Pack
      </Heading>
      <VStack boxShadow={'lg'} alignItems={'center'} borderRadius={'lg'}>
        <Box
          w="full"
          bg={'yellow.400'}
          p="4"
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text color="black">Payment Success</Text>
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px="8" mt="4" spacing={'8'}>
            <Text>
              Congratulation you are a pro member you have to access to premium
              content
            </Text>
            <Heading size="4xl">
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>
        <Link to="/profile">
          <Button variant={'ghost'}>
            Go to Profile <BiLinkExternal />
          </Button>
        </Link>
        <Heading size={'xs'}>Reference: ilsdfhl2352ksdfk</Heading>
      </VStack>
    </Container>
  );
};

export default PayementSuccess;
