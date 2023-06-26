import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';

const Logo = () => {
  return (
    <HStack>
      <Heading
        fontWeight={'bold'}
        textTransform={'uppercase'}
        color={'#FF8066'}
        textAlign={'center'}
        children="Made "
        size={['lg', '1xl', '2xl']}
        fontFamily={'Nothing You Could Do'}
      />
      <Heading
        fontWeight={'bold'}
        textTransform={'uppercase'}
        fontFamily={'Waiting for the Sunrise'}
        color={'#3CBEA9'}
        textAlign={'center'}
        children="by"
        size={['lg', '1xl', '2xl']}
      />
      <Heading
        fontWeight={'bold'}
        textTransform={'uppercase'}
        fontFamily={'Nothing You Could Do'}
        color={'#2C73D2'}
        textAlign={'center'}
        children="me"
        size={['lg', '1xl', '2xl']}
      />
    </HStack>
  );
};

const ListHeader = () => {
  return <Text fontWeight={'500'} fontSize={'lg'} mb={2}></Text>;
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>© 2023 madybyme . All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <a
                label={'Linkdin'}
                href="https://www.linkedin.com/in/abhishek-kuntare-65662421b/"
              >
                <AiFillLinkedin />
              </a>
              <a
                label={'Instagram'}
                href="https://www.instagram.com/abhishekkuntare"
              >
                <FaInstagram />
              </a>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link to={'/about'}>About us</Link>
            <Link to={'/courses'}>course</Link>
            <Link to={'/contact'}>Contact us</Link>
            <Link to={'/request'}>Request Course</Link>
            <Link to={'/'}>Home</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link to={'#'}>Help Center</Link>
            <Link to={'#'}>Terms of Service</Link>
            <Link to={'#'}>Legal</Link>
            <Link to={'#'}>Privacy Policy</Link>
            <Link to={'#'}>Satus</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('yellow.400', 'yellow.500')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'yellow.200',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
