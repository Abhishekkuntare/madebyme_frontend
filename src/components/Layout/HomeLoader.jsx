import { Box, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import './ani.css';

const HomeLoader = () => {
  return (
    // <Box
    //  backgroundColor={'white'}
    //   display={'flex'}
    //   alignItems="center"
    //   justifyContent={'center'}
    //   minH={'100vh'}
    // >
    //   <HStack>
    //     <Heading
    //       fontWeight={'bold'}
    //       textTransform={'uppercase'}
    //       color={'#FF8066'}
    //       textAlign={'center'}
    //       children="Made "
    //       size={['lg', '1xl', '2xl']}
    //       fontFamily={'Nothing You Could Do'}
    //     />
    //     <Heading
    //       fontWeight={'bold'}
    //       textTransform={'uppercase'}
    //       fontFamily={'Waiting for the Sunrise'}
    //       color={'#3CBEA9'}
    //       textAlign={'center'}
    //       children="by"
    //       size={['lg', '1xl', '2xl']}
    //     />
    //     <Heading
    //       fontWeight={'bold'}
    //       textTransform={'uppercase'}
    //       fontFamily={'Nothing You Could Do'}
    //       color={'#2C73D2'}
    //       textAlign={'center'}
    //       children="me"
    //       size={['lg', '1xl', '2xl']}
    //     />
    //   </HStack>
    // </Box>
    <>
      <div
        className="waviy"
        // alignItems="center"
        // justifyContent='center'
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '300px',
        }}
      >
        <span className="letter1" style={{ '--i': 1 }}>
          M
        </span>
        <span className="letter1" style={{ '--i': 2 }}>
          A
        </span>
        <span className="letter1" style={{ '--i': 3 }}>
          D
        </span>
        <span className="letter1" style={{ '--i': 4 }}>
          E
        </span>
        <span className="letter2" style={{ '--i': 5 }}>
          B
        </span>
        <span className="letter2" style={{ '--i': 6 }}>
          Y
        </span>
        <span className="letter3" style={{ '--i': 7 }}>
          M
        </span>
        <span className="letter3" style={{ '--i': 8 }}>
          E
        </span>
        {/* <span style={{ '--i': 9 }}>I</span>
      <span style={{ '--i': 10 }}>N</span> */}
      </div>
    </>
  );
};

export default HomeLoader;
