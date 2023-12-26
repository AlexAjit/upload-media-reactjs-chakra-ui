import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import graphics from "../assets/graphics.png"



const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  p: "4",
  size:"4xl"
}

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container minH={"100vh"} maxW={"container.xl"} p={"16"}>
        <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"} m={"auto"}>
          Services
        </Heading>
        <Stack h={"full"} p={"4"} alignItems={"center"} direction={['column', 'row']} >
          <Image src={graphics} h={["40", "400"]} filter={"hue-rotate(50deg)"} />

          <Text letterSpacing={"widst"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum modi quia omnis adipisci hic aspernatur pariatur! Quaerat vel nostrum provident omnis, qui tempora vitae nesciunt impedit ipsa eaque? Molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus, culpa voluptatem temporibus, pariatur et, error debitis odio illum corporis alias ipsa voluptatum facilis quis aspernatur consequatur adipisci tenetur beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt rem labore ex ratione cumque voluptatum, rerum nam. Molestias, necessitatibus. Culpa laborum maiores laboriosam perferendis saepe architecto eligendi blanditiis commodi. 
          </Text>
        </Stack>
      </Container>
    </Box>
  )
};

const MyCarousel = () => {
  return (
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box w={"full"} h={"100vh"}>
      <Image src={img1} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>See the nature</Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img2} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Use AI upload and generate pictures</Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img3} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Coding Nightmare</Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img4} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Use AI upload and generate pictures</Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img5} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Use AI upload and generate pictures</Heading>
    </Box>
  </Carousel>
  )
};

export default Home;