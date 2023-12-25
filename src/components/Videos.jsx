import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {

  const videoArr = [
    "https://resource.flexclip.com/templates/video/226p/old-film-movie-trailer.mp4",
    "https://resource.flexclip.com/templates/video/226p/fire-particles-bokeh-cinematic-movie-trailer.mp4",
    "https://resource.flexclip.com/templates/video/226p/epic-countdown-technology-sci-fi-movie-trailer.mp4",
    "https://resource.flexclip.com/templates/video/226p/documentary-opening-title.mp4",
    "https://resource.flexclip.com/templates/video/226p/lighting-effect-movie-trailer-intro.mp4",
    "https://resource.flexclip.com/templates/video/226p/abstract-teaser.mp4",
    "https://resource.flexclip.com/templates/video/226p/abstract-teaser.mp4",
    "https://resource.flexclip.com/templates/video/226p/abstract-teaser.mp4",
  ]

  const [videoSrc, setVideoSrc] = useState(videoArr[0]);
  return (
    <Stack direction={["column","row"]} h={"100vh"}>
      <VStack w={"full"}>
        <video controls controlsList='nodownload' src={videoSrc} style={{
          width: "100%",
        }}></video>

        <VStack alignItems={"flex-start"} p={"8"} w={"full"} overflowY={"auto"}>
          <Heading>Sample Video 1</Heading>
          <Text>This is a description of sample video. please check the bugs and problems and give us siggestions.</Text>
        </VStack>
      </VStack>
      <VStack w={["full","xl"]} alignItems={"stretch"} p={"8"} spacing={"8"} overflowY={"auto"}>
        {
          videoArr.map((item, index)=> (
            <Button variant={"ghost"} colorScheme='purple' 
            onClick={() => setVideoSrc(item)}
            >Lecture {index + 1}</Button>
          ))
        }
      </VStack>
    </Stack>
  )
}

export default Videos