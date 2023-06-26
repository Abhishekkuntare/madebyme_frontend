import {
  Box,
  Text,
  Button,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  VStack,
  Input,
  ModalFooter,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../../Auth/Register';

const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteLectureButtonHandler,
  courseTitle,
  addLectureButtonHandler,
  lectures = [],
  loading,
}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');

  const changeVideoHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };
  const handleClose = () => {
    setTitle('');
    setDesc('');
    setVideo('');
    setVideoPrev('');
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      size="full"
      onClose={handleClose}
      scrollBehavior="inside"
    >
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>{courseTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={16}>
            <Grid templateColumns={['1fr,3fr 1fr']}>
              <Box px={['0', '16']}>
                <Box my={'5'}>
                  <Heading children={courseTitle} />
                  <Heading children={`#${id}`} size="sm" opacity={0.4} />
                </Box>
                <Heading children="Lectures" size={'lg'} />
                {lectures &&
                  lectures.map((item, i) => (
                    <VideoCard
                      key={i}
                      title={item.title}
                      desc={item.description}
                      num={i + 1}
                      lectureId={item._id}
                      courseId={id}
                      deleteLectureButtonHandler={deleteLectureButtonHandler}
                      loading={loading}
                    />
                  ))}
              </Box>
              <form
                onSubmit={e =>
                  addLectureButtonHandler(e, id, title, desc, video)
                }
              >
                <VStack spacing={4}>
                  <Heading
                    children="Add Lectures"
                    size={'md'}
                    textTransform="uppercase"
                  />
                  <Input
                    value={title}
                    focusBorderColor="purple.300"
                    placeholder="Title"
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    value={desc}
                    focusBorderColor="purple.300"
                    placeholder="Description"
                    onChange={e => setDesc(e.target.value)}
                  />

                  <Input
                    accept="video/mp4"
                    required
                    type={'file'}
                    focusBorderColor="purple.300"
                    css={{
                      '&::file-selector-button': {
                        ...fileUploadCss,
                        color: 'purple',
                      },
                    }}
                    onChange={changeVideoHandler}
                  />
                  {videoPrev && (
                    <video
                      controlsList="nodownload"
                      controls
                      src={videoPrev}
                    ></video>
                  )}
                  <Button
                    isLoading={loading}
                    w="full"
                    colorScheme={'purple'}
                    type="submit"
                  >
                    Upload
                  </Button>
                </VStack>
              </form>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default CourseModal;

function VideoCard({
  title,
  desc,
  num,
  lectureId,
  courseId,
  deleteLectureButtonHandler,
  loading,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my={8}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107, 70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'}>
          {`#${num}${title}`}
          <Text children={desc} />
        </Heading>
      </Box>
      <Button
        isLoading={loading}
        color={'purple.600'}
        onClick={() => deleteLectureButtonHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}
