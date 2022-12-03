import { Avatar, HStack, Flex, Link, Icon, Text } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub, AiFillMessage } from "react-icons/ai";
import React from "react";


const Header = () => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      maxW={["90vw", "70vw", "30vw"]}
      alignItems="center"
      justifyContent="center"
    >
      <Avatar size="2xl" src="images/profilepic.jfif" />
      <Text color="white" align="center" className="headerTitle" my={5}>
        Hi! My name is Josefine.
      </Text>
      <Text color="white" align="center" >
      I'm a software developer with a frontend focus who values user perspective, clean code and collaboration, using tools such as  
      <span className="keywords"> JS, TS, React, Vue & Node</span>. 
        Scroll down to check out some of my experiences and hobby projects, or get in touch if you want to know more!
      </Text>
      <HStack mt={6} spacing={8} mb={[12, 24, 24]}>
        <Link  href="https://www.linkedin.com/in/josefine-flygge/">
          <Icon color="white" boxSize={10} as={AiFillLinkedin} />
        </Link>
        <Link  href="https://github.com/josefineflygge">
          <Icon color="white" boxSize={9} as={AiFillGithub} />
        </Link>
        <Link href="mailto:jflygge@gmail.com?Subject=Hello!">
          <Icon color="white" boxSize={9} as={AiFillMessage} />
        </Link>
      </HStack>
    </Flex>
  );
};

export default Header;
