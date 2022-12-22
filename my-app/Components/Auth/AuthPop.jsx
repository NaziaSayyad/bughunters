import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Img,
  Text,
  ListIcon,
  UnorderedList,
  List,
  ListItem,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { ImPencil } from "react-icons/im";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsChatLeftTextFill } from "react-icons/bs";

function AuthPop() {
  return (
    <div>
      <Popover trigger="hover">
        <PopoverTrigger bg="white">
          <Img
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            atl="avatar"
            borderRadius="50%"
            h="40px"
            display="block"
            margin="auto"
          />
        </PopoverTrigger>
        <PopoverContent bg="#9F9C99" w="250px" p="20px" mt="10px">
          <PopoverBody>
            <Img
              src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
              atl="avatar"
              borderRadius="50%"
              h="50px"
              display="block"
              margin="auto"
            />
            <Text fontWeight={"600"} fontSize={"18px"} textAlign={"center"}>
              Rohit Gupta
            </Text>
            <Text fontSize={"14px"} textAlign={"center"}>
              Princerrohit9893@gmail.com
            </Text>
            <Box py="20px">
              <hr />
            </Box>
            <List spacing={3}>
              <ListItem fontWeight="600">
                <ListIcon as={ImPencil} color="blue.700" />
                Create Post
              </ListItem>
              <ListItem fontWeight="600">
                <ListIcon as={RiDeleteBin5Line} color="blue.700" />
                Delete Post
              </ListItem>

              <ListItem fontWeight="600">
                <ListIcon as={BsChatLeftTextFill} color="blue.700" />
                My post
              </ListItem>
              <ListItem fontWeight="600">
                <ListIcon as={BiLogOut} color="blue.700" />
                Logout
              </ListItem>
            </List>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default AuthPop;
