import {
  chakra,
  Stack,
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
import { Link } from 'react-router-dom';
import { BiCheck } from 'react-icons/bi';

const plansList = [
  {
    title: 'Android Single Site',
    subLabel: 'Build one application',
    price: 150,
    features: [
      'Authentication',
      'Tab Bar Navigation',
      'Push Notifications',
      'API Integration Built-in',
      'Easy Upgrades',
    ],
  },
  {
    title: 'Android Unlimited',
    subLabel: 'Build unlimited apps',
    price: 799,
    features: [
      'Authentication',
      'Tab Bar Navigation',
      'Push Notifications',
      'API Integration Built-in',
      'Easy Upgrades',
      'Build Unlimited Android Apps',
    ],
  },
];

const Pricing = () => {
  return (
    <>
      {' '}
      <Container maxW="5xl" p="6">
        <chakra.h2 fontSize="5xl" fontWeight="bold" textAlign="center" mb={5}>
          Android Pricing
        </chakra.h2>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mt={4}>
          {plansList.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </SimpleGrid>
      </Container>
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
            after graduating from Crio
          </chakra.h1>
          <Text color={'gray.500'} maxW={'3xl'}>
            A course description is a brief summary of the significant learning
            Work in great companies with better compensation after your time at
            Made By Me .
          </Text>
          <video
            className="home_video"
            style={{ borderRadius: '4%' }}
            width={'80%'}
            muted={true}
            loop={true}
            controls={false}
            autoPlay={true}
            src="https://cdn.dribbble.com/userupload/4393085/file/original-17be7a045d1a75327adee812f92408c8.mp4"
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
    </>
  );
};

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
            ${price}
            <Text as="sub" fontSize="md" fontWeight="normal">
              /year
            </Text>
          </Text>
          <Button
            colorScheme="blue"
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

export default Pricing;
