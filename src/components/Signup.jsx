import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={"120vh"} p={"16"}>
      <form>
        <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"} >
          <Heading m={"auto"}>CoderHub</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"} />
          <Input placeholder={"Full Name"} type={"text"} required focusBorderColor={"purple.500"} />
          <Input placeholder={"abc@gmail.com"} type={"email"} required focusBorderColor={"purple.500"} />
          <Input placeholder={"password"} type={"password"} required focusBorderColor={"purple.500"} />

          <Button colorScheme={"purple"} type={"submit"}>Sign Up</Button>

          <Text textAlign={"right"}>
            Already signed up?{"  "}
            <Button variant={"link"} colorScheme={"purple"}>
            <Link to={"/login"}>Sign In</Link>
          </Button>
            </Text>
          
        </VStack>
      </form>
    </Container>
  )
}

export default Signup