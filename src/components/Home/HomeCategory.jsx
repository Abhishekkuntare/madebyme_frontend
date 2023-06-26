import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

import category from '../../assets/home/category';

export default function HomeCategory() {
  return (
    <>
      <Flex
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        marginTop={150}
        marginBottom={150}
      >
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
        >
          <Text textAlign={'center'} fontWeight="bold" fontSize={[40, 60]}>
            We offers various types of{' '}
          </Text>
          <Text
            textAlign={'center'}
            fontSize={[40, 60]}
            bgClip="text"
            bgGradient="linear(to-r, purple.400,red.500)"
            fontWeight="extrabold"
          >
            {' '}
            Categories keep explore
          </Text>
        </Box>
      </Flex>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        flexWrap={'wrap'}
      >
        {category.map(item => (
          <Box
            key={item.id}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexWrap={'wrap'}
            marginLeft={[0, 10]}
            marginBottom={10}
            flexDir={'column'}
          >
            <Image
              transition={'1s all ease-in-out '}
              cursor={'pointer'}
              _hover={{
                transform: 'scale(-1.1)',
              }}
              borderRadius={'10%'}
              width={'500px'}
              padding={2}
              src={item.img}
            />

            <Button
              bgGradient={`linear(to-r, ${item.c1}.200,${item.c2}.300)`}
              marginTop={20}
              padding={10}
              width={200}
              height={20}
              _hover={{
                bgGradient: `linear(to-l, ${item.c2}.200,${item.c2}.200)`,
              }}
            >
              {item.name}
            </Button>
          </Box>
        ))}
      </Box>
    </>
  );
}
