import React from 'react';
import {
  chakra,
  VStack,
  HStack,
  Text,
  Container,
  Box,
  Icon,
  Button,
  Divider,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiCheck } from 'react-icons/bi';
import Testimonials from '../Testimonials/Testimonials';

const plansList = [
  {
    title: 'Buy individual courses',
    subLabel: '3 months subscription',
    price: 299,
    features: [
      '4.4/5 average rating',
      'Video quality 70%',
      'Hands-on learning experiences to build your skills',
      'Career guides for web developers and data scientists',
      'Course recommendations to help you start learning faster',
    ],
  },
  {
    title: 'Premium courses',
    subLabel: '10 months subscription ',
    price: 799,
    features: [
      'Video quality 100%',
      'Hands-on learning experiences to build your skills',
      '8,000+ professional and personal development courses',
      'Doubt Support',
      'Course recommendations to help you start learning faster',
    ],
  },
];

const Subscribe = () => {
  return (
    <>
      <Container mt={100} maxW="5xl" p="6">
        <chakra.h2 fontSize="5xl" fontWeight="bold" textAlign="center" mb={5}>
          Choose your plan
        </chakra.h2>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mt={4}>
          {plansList.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </SimpleGrid>
      </Container>
      <Testimonials />
    </>
  );
};

export default Subscribe;

const PricingCard = ({ title, subLabel, price, features }) => {
  return (
    <>
      <Box
        minW={{ base: 'xs', sm: 'sm' }}
        border="1px solid"
        borderColor={useColorModeValue('gray.400', 'gray.600')}
        rounded="md"
        marginInline="auto"
        my={3}
        _hover={{
          boxShadow: useColorModeValue(
            '0 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.4)'
          ),
        }}
      >
        <Box p={6}>
          <chakra.h2 fontSize="2xl" fontWeight="400">
            {title}
          </chakra.h2>
          <Text fontSize="sm">{subLabel}</Text>
          <Text fontSize="4xl" fontWeight="bold" my={4}>
            ₹{price}
            <Text as="sub" fontSize="md" fontWeight="normal">
              /month
            </Text>
          </Text>
          <Button
            colorScheme="yellow"
            variant="solid"
            size="md"
            rounded="md"
            w="100%"
          >
            Get Started
          </Button>
        </Box>
        <Divider />
        <VStack p={6} spacing={4} alignItems="flex-start">
          <Text fontSize="sm" fontWeight="semibold">
            WHAT'S INCLUDED
          </Text>
          {features.map((feature, index) => (
            <HStack key={index} spacing={3}>
              <Icon as={BiCheck} h={4} w={4} color="green.500" />
              <Text fontSize="sm" color="gray.500">
                {feature}
              </Text>
            </HStack>
          ))}
        </VStack>
      </Box>
    </>
  );
};
