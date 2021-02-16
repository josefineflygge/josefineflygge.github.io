import { Box, Image, Tag, VStack, Text, Link } from "@chakra-ui/react";
import React from "react";
import { Project } from "../types/Project";
import { MDBView, MDBMask } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const ExperienceCard = ({
  title,
  img,
  link,
  description,
  keywords,
}: Project) => {
  return (
    <Box maxW="md" overflow="hidden ">
      <Link href={link ?? "#"} cursor="pointer">
        <MDBView hover>
          <Image src={img} alt={title} className="img-fluid" />
          <MDBMask overlay="black-strong">
            <VStack
              h="100%"
              d="flex"
              flexDir="column"
              cursor="pointer"
              justifyContent="center"
              alignItems="center"
            >
              <Box pl={4} pr={4} textAlign="center">
                <Text
                  fontSize="18px"
                  fontWeight="bold"
                  alignContent="center"
                  color="white"
                >
                  {title}
                </Text>
                <Box mb={2} px={6}>
                  <Text
                    display={["none", null, "flex"]}
                    fontSize="13px"
                    color="white"
                  >
                    {description}
                  </Text>
                </Box>
                <Box d="inline-block">
                  {keywords.map((keyword, i) => (
                    <Tag
                      key={i}
                      mr={2}
                      mt={2}
                      borderRadius="full"
                      variant="solid"
                      bg="black"
                      color="white"
                    >
                      {keyword}
                    </Tag>
                  ))}
                </Box>
              </Box>
            </VStack>
          </MDBMask>
        </MDBView>
      </Link>
    </Box>
  );
};

export default ExperienceCard;

/*}.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #000;
  }
  
  .projcontainer:hover .overlay {
    opacity: 0.9;
  }
  
  .projtext {
    color: white;
    font-size: 12px;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    font-family: 'Raleway', sans-serif;
  }
*/
