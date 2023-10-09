import { Avatar, Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Make an HTTP GET request to fetch data from the URL
    fetch("https://panorbit.in/api/users.json")
      .then((response) => response.json()) // Parse the response JSON

      .then((data) => setUserData(data.users)) // Update the state with the fetched data
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box
      bgImage="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCI+PHBhdGggZmlsbD0iIzAwOTlmZiIgZmlsbC1vcGFjaXR5PSIxIj4KPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNMjMsOTZMMzQuMywxMTcuM2M2OC42LDEzOSwxMzcsMTgxLDIwNiwzMDYuM0M3OCwzNTksMTM3LDE4MSwzMzcsMTk3LjNjMTY1LjcsMjAzLDMzNCwxNDksMzQzLDE3Ni4yQzE2NC4zMTksMTQ5LDEzMCwxNzEsMTIxLDEwMjkuMTRDMTE5Ny4xLDExMy4zMTYsMTE2LDE5MiwxMTcsMTk2LjRDMjMwLjk1LDE5OSwyMzAsMTk2LDE5OSwxOTMuM3MxMzUsMTQ5LDEzOSwxODIsMTM0LjdzMTc3LjEsMTM4LDE0OSwxMzMuM3YxNDAwLDEyOGw0MDAsMTI4LDEwMy4zMywxMzguMzMxTDExLjgsMTI4TDE0NC4wLDEyOGwxNzkuNCw0OC41TDQwMCwxMzgsMTM0LjUsMTA2MywxMzQuN0MxMzcxLjQsMTM5LDEzMCwxMzAsMTI5LDEyMyw5MzUuMiwxMzguNjYzLDEzNCwxMzguMzMxLDEyOCwxMzMuM3ptLjAsMTAwLDE5NkwyLjMsMzQuM0wzNC4zLDAsMTQ0MCwzMjAsMTMwLjNjNjguNiwxMzksMTM3LDE4MSwyMDYsMjA2LDMwNi4zQzE3NS43LDE5MiwyMDEsMTg4LDE5NywyMTMuM0MxODkxLDE5MywxOTYsMTg5LDE5OSwyMTMuM0MxMzUuMSwxOTksMTI5LDE5OSwxMjM0LDE5OSwxMzMuM0wxNDQwLDEyOEwxNDQwLDAsMTM0MCwxMzguMzMxLDEzNCw0LDEwNiwxMjgsMTAwLDEyMywxMywxMjgsMFoiLz48L3N2Zz4=')"
      minHeight={"100vh"}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      display="flex"
      flexDirection="column"
    >
      <Center pt={36}>
        <Box
          w={"container.sm"}
          bgColor={"#f6f6f6"}
          borderRadius={"24px"}
          boxShadow={"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}
        >
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
            color={"#545454"}
            textAlign={"center"}
            p={10}
          >
            Select an account
          </Text>
          <Box p={2} pt={5} pb={6} bgColor={"#fff"} borderBottomRadius={"24px"}>
            <Box
              display={"flex"}
              flexDir={"column"}
              gap={3}
              pl={8}
              pr={8}
              h={"md"}
              overflow={"scroll"}
              overflowX={"hidden"}
              borderRadius={"10px"}
            >
              {userData.map((user, index) => (
                <Flex
                  key={index}
                  flexDir={"column"}
                  gap={3}
                  cursor={"pointer"}
                >
                  <Link to={`./${user.id}`}>
                    <Flex placeItems={"center"} gap={5}>
                      <Avatar
                        name={user.name}
                        src={user.profilepicture}
                        size={"sm"}
                      />
                      <Text fontSize={"xl"} color={"rgb(74,74,74)"}>
                        {user.name}
                      </Text>
                    </Flex>
                  </Link>
                  <Divider
                    borderColor={"rgb(227,227,227)"}
                    borderBottomWidth={"1.5px"}
                  />
                </Flex>
              ))}
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default HomePage;
