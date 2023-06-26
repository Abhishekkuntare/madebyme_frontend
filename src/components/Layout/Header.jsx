import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Heading,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user';

const Header = ({ isAuthenticated, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    onClose();
    dispatch(logout());
  };
  return (
    <>
      <ColorModeSwitcher />
      <Button
        zIndex={'overlay'}
        onClick={onOpen}
        colorScheme={'yellow'}
        width={12}
        height={12}
        rounded="full"
        position={'fixed'}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(10px)'} />
        <DrawerContent>
          <HStack ml={'5'} mt={'15'}>
            <Heading
              fontWeight={'bold'}
              textTransform={'uppercase'}
              color={'#FF8066'}
              textAlign={'center'}
              children="Made "
              size={['md', 'lg', 'lg']}
              fontFamily={'Nothing You Could Do'}
            />
            <Heading
              fontWeight={'bold'}
              textTransform={'uppercase'}
              fontFamily={'Waiting for the Sunrise'}
              color={'#3CBEA9'}
              textAlign={'center'}
              children="by"
              size={['md', 'lg', 'lg']}
            />
            <Heading
              fontWeight={'bold'}
              textTransform={'uppercase'}
              fontFamily={'Nothing You Could Do'}
              color={'#2C73D2'}
              textAlign={'center'}
              children="me"
              size={['md', 'lg', 'lg']}
            />
          </HStack>
          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              <Link to={'/'} onClick={onClose}>
                <Button variant={'ghost'}>Home</Button>
              </Link>
              <Link to={'/courses'} onClick={onClose}>
                <Button variant={'ghost'}>Browse All Courses</Button>
              </Link>
              <Link to={'/request'} onClick={onClose}>
                <Button variant={'ghost'}>Request A Course</Button>
              </Link>
              <Link to={'/contact'} onClick={onClose}>
                <Button variant={'ghost'}>Contact Us</Button>
              </Link>
              <Link to={'/about'} onClick={onClose}>
                <Button variant={'ghost'}>About</Button>
              </Link>
              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to={'/profile'} onClick={onClose}>
                          <Button colorScheme={'yellow'} variant={'ghost'}>
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link to={'/admin/dashboard'} onClick={onClose}>
                          <Button colorScheme={'purple'} variant="ghost">
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to={'/login'} onClick={onClose}>
                      <Button colorScheme={'yellow'}> Login </Button>
                    </Link>
                    <p>OR</p>
                    <Link to={'/register'} onClick={onClose}>
                      <Button colorScheme={'yellow'}> Sign Up </Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
