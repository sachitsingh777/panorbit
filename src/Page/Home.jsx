import React from 'react';
import { CssBaseline } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import { Box, Flex } from '@chakra-ui/react';
import AllRoutes from '../components/AllRoutes';
import Profile from './Profile';

const Home = () => {
  return (
    <Flex>
     
      <Box
        w={"20%"} // Set the width
        h="100vh" // Set the height to fill the viewport
        bg="gray.200" // Set the background color
        p={4} // Add padding
      >
        <Sidebar />
      </Box>
      <Box w={"80%"}>
      <Profile/>

      </Box>
    </Flex>
  );
};

export default Home;
