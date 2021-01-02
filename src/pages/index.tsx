import { NextPage } from "next"

import { Divider, Flex } from "@chakra-ui/react"

import { BgImage } from "../components/BgImage"
import { Mars } from "../components/Mars"
import { Navbar } from "../components/Navbar"
import { SideText } from "../components/SideText"
import { TextBox } from "../components/TextBox"

const Index: NextPage = () => {
  return (
    <BgImage overflow="hidden">
      <Navbar />
      <Flex justify="space-around">
        <Flex w="30px" alignItems="center" justify="center">
          <Divider h="80%" ml="-80px" orientation="vertical" />
          <Divider h="65%" ml="4" orientation="vertical" />
          <TextBox>
            Mars is a planet. It is the fourth planet from the Sun. It is the
            next planet beyond Earth. Mars is more than 142 million miles from
            the Sun. The planet is about half the size of Earth. A day on Mars
            is 24.6 hours. A year on Mars is 687 Earth days. Mars is known as
            the Red Planet.
          </TextBox>
        </Flex>
        <Flex minHeight="100vh" direction="column" justifyContent="center">
          <Mars />
        </Flex>
        <SideText />
      </Flex>
    </BgImage>
  )
}

export default Index
