import { NextPage } from "next"

import { Container, Flex } from "@chakra-ui/react"

import { BgImage } from "../components/BgImage"
import { Mars } from "../components/Mars"

const Index: NextPage = () => {
  return (
    <BgImage overflow="hidden">
      <Container textAlign="center">
        <Flex minHeight="100vh" direction="column" justifyContent="center">
          <Mars />
        </Flex>
      </Container>
    </BgImage>
  )
}

export default Index
