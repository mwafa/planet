import { Box } from "@chakra-ui/react"

export const Red: React.FC = ({ children }) => {
  return (
    <Box color="yellowGrad" as="span">
      {children}
    </Box>
  )
}
