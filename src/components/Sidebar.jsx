import { Box, Divider, Flex, Link, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Sidebar = ({ userId }) => {
  const location = useLocation();

  const sidebarLinks = [
    { path: `/profile/${userId}`, label: "Profile" },
    { path: `/post`, label: "Posts" },
    { path: `/gallery`, label: "Gallery" },
    { path: `/todo`, label: "ToDo" },
  ];

  return (
    <Flex
      background={"#395bc8"}
      p={4}
      h={"100%"}
      flexDirection={"column"}
      alignItems={"center"}
     
    >
      {sidebarLinks.map((link, index) => (
        <Box key={index} mb={4}>
          <Link
            to={link.path}
            fontWeight={location.pathname === link.path ? "bold" : "normal"}
            fontSize={"lg"}
            color={"white"}
            _hover={{ textDecoration: "none" }}
          >
            {link.label}
          </Link>
          <Divider borderColor={"whiteAlpha.400"} mt={2} />
        </Box>
      ))}
    </Flex>
  );
};

export default Sidebar;
