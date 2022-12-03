import { Container, Text, Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React, {
  useRef,
  useEffect,
  useState,
  MutableRefObject,
} from "react";
import ExperienceCard from "./ExperienceCard";
import Header from "./Header";
import { projectsList } from "../constants/projects";

const LandingPage = () => {
  const [darkBg, setDarkBg] = useState(true);
  const projectListRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 350 && darkBg) {
        setDarkBg(false);
      }
      if (window.scrollY < 350 && !darkBg) {
        setDarkBg(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [darkBg]);


  const bgStyle = {
    bgColor: darkBg ? "#7A57DD" : "#fff",
    backgroundSize: "cover",
    transition: "300ms ease",
    backgroundAttachment: "fixed",
  };

  return (
    <Box {...bgStyle}>
      <Container p={8} maxW={["100vw", "90vw", "80vw"]}>
        <Flex flexDir="column" alignItems="center">
          <Header />
          <SimpleGrid
            pt={20}
            ref={projectListRef as MutableRefObject<HTMLDivElement>}
            columns={{ base: 1, lg: 2 }}
            spacing={4}
          >
            <Text
              className="headerTitle"
              alignSelf="center"
              justifySelf="center"
            >
              Hover for Details
            </Text>
            {projectsList.map((project, i) => (
              <ExperienceCard key={i} {...project} />
            ))}
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};

export default LandingPage;
