import { Box, Heading } from "@chakra-ui/react"

export const TextBox: React.FC = ({ children }) => {
  return (
    <Box
      margin="-60px"
      p={4}
      pt={10}
      color={"gray.300"}
      lineHeight="1.1em"
      fontSize=".9em"
      letterSpacing=".05em"
      style={{
        backdropFilter: "blur(10px)",
        borderRadius: "15px",
      }}
    >
      <Box position="absolute" left="50%" top="-30px">
        <Heading
          position="relative"
          left="-50%"
          lineHeight="60px"
          width="60px"
          textAlign="center"
          verticalAlign="middle"
          bgColor="teal.900"
          style={{
            backdropFilter: "blur(10px)",
            borderRadius: "50%",
          }}
        >
          ?
        </Heading>
      </Box>
      {children}
    </Box>
  )
}
