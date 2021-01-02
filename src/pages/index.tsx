import { NextPage } from "next"
import GithubCorner from "react-github-corner"

import { Divider, Flex } from "@chakra-ui/react"

import { BgImage } from "../components/BgImage"
import { Mars } from "../components/Mars"
import { Navbar } from "../components/Navbar"
import { Red } from "../components/Red"
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
            Mars is a <Red>planet</Red>. It is the{" "}
            <Red>fourth planet from the Sun</Red>. It is the next planet beyond
            Earth. Mars is <Red>more than 142 million miles from the Sun</Red>.
            The planet is about half the size of Earth. A day on Mars is{" "}
            <Red>24.6</Red> hours. A year on Mars is 687 Earth days. Mars is
            known as the <Red>Red</Red> Planet.
          </TextBox>
        </Flex>
        <Flex minHeight="100vh" direction="column" justifyContent="center">
          <Mars />
        </Flex>
        <SideText />
      </Flex>
      <GithubCorner
        href="https://github.com/mwafa/planet"
        bannerColor="#64CEAA"
        octoColor="#fff"
        size={80}
        direction="right"
      />
    </BgImage>
  )
}

export default Index
