import { Box, Flex } from "@chakra-ui/react"

export const SideText: React.FC = () => {
  return (
    <Flex
      color="gray.400"
      width="1em"
      letterSpacing="1em"
      textTransform="uppercase"
      textAlign="center"
      w="30px"
      fontSize="1.8em"
      mr={4}
      direction="column"
      justify="center"
      fontFamily="Staatliches"
    >
      {"The Red Planet".split("").map((t, idx) => (
        <Box
          width="2em"
          height="1.2em"
          textAlign="center"
          fontWeight="bold"
          lineHeight="1.4em"
          key={t + idx}
          color={3 < idx && idx < 7 ? "red.400" : "inherit"}
        >
          {t}
        </Box>
      ))}
    </Flex>
  )
}
