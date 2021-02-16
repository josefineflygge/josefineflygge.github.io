import { Avatar, HStack, Flex, Link, Icon, Text } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub, AiFillMessage } from "react-icons/ai";
import React from "react";

const Header = ({ handleScrollToProjects }) => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      maxW={["90vw", "70vw", "25vw"]}
      alignItems="center"
      justifyContent="center"
    >
      <Avatar size="2xl" src="images/profilepic.jfif" />
      <Text color="white" align="center" className="headerTitle" my={5}>
        Hi! My name is Josefine.
      </Text>
      <Text color="white" align="center">
        I'm a software developer who likes creating things that are interactive
        and user-friendly. Preferably in the form of a website, app or game with
        technologies such as{" "}
        <span className="keywords">JS, TypeScript, React and Node.</span> Feel
        free to check out some of my experiences below don't hesitate to contact
        me! Always excited to expand my knowledge. 🚀
      </Text>
      <HStack mt={6} mb={[12, 24, 24]}>
        <Link mx={8} href="https://www.linkedin.com/in/josefine-flygge/">
          <Icon color="white" boxSize={10} as={AiFillLinkedin} />
        </Link>
        <Link mx={8} href="https://github.com/josefineflygge">
          <Icon color="white" boxSize={9} as={AiFillGithub} />
        </Link>
        <Link mx={8} href="mailto:jflygge@gmail.com?Subject=Hello!">
          <Icon color="white" boxSize={9} as={AiFillMessage} />
        </Link>
      </HStack>
      <Link onClick={handleScrollToProjects} className="scrollbtn">
        <span></span>
      </Link>
    </Flex>
  );
};

export default Header;
