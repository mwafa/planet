import { BoxProps, Flex, Heading } from "@chakra-ui/react"

import { Moon } from "./icons/Moon"
import { Planet } from "./icons/Planet"

export const Navbar: React.FC = () => {
  return (
    <Flex justify="center">
      <NavbarItem active={true}>
        <Planet />
        THE PLANET
      </NavbarItem>
      <NavbarItem>
        <Moon />
        THE MOONS
      </NavbarItem>
    </Flex>
  )
}

type NavbarItemProps = BoxProps & {
  active?: boolean
}

const NavbarItem: React.FC<NavbarItemProps> = ({ children, active }) => (
  <Heading
    color={active ? "yellowGrad" : "gray.400"}
    fontSize="1.4em"
    letterSpacing=".1em"
    fontWeight="initial"
    py={4}
    px={10}
  >
    <Flex>{children}</Flex>
  </Heading>
)
