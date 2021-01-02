import { NextPage } from "next"

import { Box, Container } from "@chakra-ui/react"

const Index: NextPage = () => {
  const date = new Date()
  return (
    <Container textAlign="center">
      <Box>Welcome</Box>
      <Box>{date.toLocaleDateString()}</Box>
    </Container>
  )
}

export default Index
