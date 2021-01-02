import {
  Box,
  Heading,
  HeadingProps,
  Img,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react"

export const Mars: React.FC = () => {
  return (
    <Box textAlign="center" pos="relative">
      <Img m="auto" maxH="60vh" maxW="60vw" src="/img/mars.png" />
      <Orbit space={15} time={10} />
      <Orbit space={10} time={15} />
      <Orbit space={5} time={5} />
      <HeroTitle bgClip="initial" bg="none" textShadow="5px 5px 20px #555" />
      <HeroTitle />
    </Box>
  )
}

const spin = keyframes`
from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Orbit: React.FC<{ space: number; time: number }> = ({ space, time }) => {
  const reduceMotion = usePrefersReducedMotion()
  const animation = reduceMotion
    ? undefined
    : `${spin} infinite ${time}s linear`
  return (
    <Box position="absolute" top="50%" left="50%">
      <Box
        borderWidth="1px"
        position="relative"
        mt="-50%"
        filter="blur(1px)"
        left="-50%"
        borderRadius="50%"
        p={30 + space + "vh"}
        transform="rotate(30deg)"
        opacity={0.7}
        animation={animation}
      >
        <Box
          position="absolute"
          borderRadius="50%"
          w="25px"
          h="25px"
          filter="blur(2px)"
          bgColor="white"
          left="-12px"
          top="50%"
          animation="transform 2s infinite linear"
        />
      </Box>
    </Box>
  )
}

const HeroTitle: React.FC<HeadingProps> = ({ ...props }) => (
  <Box position="absolute" top="50%" left="50%">
    <Heading
      position="relative"
      fontSize="15em"
      letterSpacing=".2em"
      color="transparent"
      left="-50%"
      mt="-.5em"
      textAlign="center"
      lineHeight="1em"
      fontWeight="inherit"
      bgGradient={"linear(to-b, yellowGrad, white)"}
      bgClip="text"
      {...props}
    >
      MARS
    </Heading>
  </Box>
)
