import React from "react";
import { chakra, Box, Flex, HStack, Button, useDisclosure, VStack, IconButton, Avatar, Link } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import styles from "./navbar.module.css";
import { FcHome, FcSearch } from "react-icons/fc";
import { TbNotebook } from "react-icons/tb";
import { ImPencil } from "react-icons/im";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";

export default function Navbar() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <chakra.header
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        pos={"sticky"}
        top="0"
        zIndex={10}
        // bg="black"
        color="white"
      >
        <Flex justifyContent="space-between" mx="auto">
          <HStack spacing={3} display={{ base: "none", md: "flex" }} gap="6">
            <Link
              activeClass={"active"}
              spy={true}
              smooth={true}
              duration={700}
              fontSize="18"
              _hover={{ color: "#0078ff" }}
            >
              <FcHome className={styles.homelogo} />
            </Link>
            <Link
              activeClass={"active"}
              spy={true}
              smooth={true}
              duration={700}
              fontSize="18"
              _hover={{ color: "#0078ff" }}
            >
              <TbNotebook className={styles.homelogo} />
            </Link>
            <Link
              activeClass={"active"}
              spy={true}
              smooth={true}
              duration={700}
              fontSize="18"
              _hover={{ color: "#0078ff" }}
            >
              <ImPencil className={styles.homelogo} />
            </Link>
            <Link
              activeClass={"active"}
              spy={true}
              smooth={true}
              duration={700}
              fontSize="18"
              _hover={{ color: "#0078ff" }}
            >
              <BsFillPeopleFill className={styles.homelogo} />
            </Link>
            <Link
              activeClass={"active"}
              spy={true}
              smooth={true}
              duration={700}
              fontSize="18"
              _hover={{ color: "#0078ff" }}
            >
              <GrNotification className={styles.homelogo} />
            </Link>
          </HStack>
          <Box display={{ base: "flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              fontSize="20px"
              colorScheme={"blackAlpha"}
              // icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              // onClick={isOpen ? onClose : onOpen}
            />
            <VStack
              pos="absolute"
              left={0}
              right={0}
              top={16}
              // display={isOpen ? "flex" : "none"}
              pb="6"
              rounded="sm"
              shadow="sm"
              bgGradient="radial-gradient(circle at 27.1% 51.8%, #0c3542 0.5%, #28324c 94.4%);"
              color="white"
            >
              <Link
                activeClass={"active"}
                spy={true}
                smooth={true}
                duration={700}
                fontSize="18"
                _hover={{ color: "#0078ff" }}
              >
                <FcHome className={styles.homelogo} />
              </Link>
              <Link
                activeClass={"active"}
                spy={true}
                smooth={true}
                duration={700}
                fontSize="18"
                _hover={{ color: "#0078ff" }}
              >
                <TbNotebook className={styles.homelogo} />
              </Link>
              <Link
                activeClass={"active"}
                spy={true}
                smooth={true}
                duration={700}
                fontSize="18"
                _hover={{ color: "#0078ff" }}
              >
                <ImPencil className={styles.homelogo} />
              </Link>
              <Link
                activeClass={"active"}
                spy={true}
                smooth={true}
                duration={700}
                fontSize="18"
                _hover={{ color: "#0078ff" }}
              >
                <BsFillPeopleFill className={styles.homelogo} />
              </Link>
              <Link
                activeClass={"active"}
                spy={true}
                smooth={true}
                duration={700}
                fontSize="18"
                _hover={{ color: "#0078ff" }}
              >
                <GrNotification className={styles.homelogo} />
              </Link>
            </VStack>
          </Box>
        </Flex>
      </chakra.header>
    </>

import AuthPop from "./Auth/AuthPop";
import AuthLogin from "./Auth/AuthLogin";
import { Flex, Stack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div id={styles.papa}>
      <div className="left">
        <div className={styles.left1}>
          <img
            className={styles.navlog}
            src="https://i.imgur.com/Pt5qPA4.jpg"
            alt="nav"
          />
          <FcHome className={styles.homelogo} />
          <TbNotebook className={styles.homelogo} />
          <ImPencil className={styles.homelogo} />
          <BsFillPeopleFill className={styles.homelogo} />
          <GrNotification className={styles.homelogo} />
        </div>
      </div>
      <div className="right">
        <div className={styles.right1}>
          <div className={styles.searchbox}>
            <FcSearch className={styles.searchboxinput} />
            <input
              type="text"
              className={styles.searchinput}
              placeholder="Search here ..."
            />
          </div>
        </div>
      </div>

      <Flex align={"center"} gap="10px">
        <AuthPop />
        <AuthLogin />
      </Flex>
    </div>

  );
}

{
  /* <img className={styles.navlog} src="https://i.imgur.com/Pt5qPA4.jpg" alt="nav" /> */
}
// <div className={styles.searchbox}>
// <FcSearch className={styles.searchboxinput}/>
// <input type="text" className={styles.searchinput}  placeholder="Search here ..."/>
// </div>
