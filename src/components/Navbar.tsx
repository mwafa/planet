import { BoxProps, Flex, Heading } from "@chakra-ui/react"

export const Navbar: React.FC = () => {
  return (
    <Flex justify="center">
      <NavbarItem active={true}>THE PLANET</NavbarItem>
      <NavbarItem>THE MOONS</NavbarItem>
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
    py={4}
    px={10}
  >
    {children}
  </Heading>
)
