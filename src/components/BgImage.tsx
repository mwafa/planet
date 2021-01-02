import { Box, BoxProps } from "@chakra-ui/react"

export const BgImage: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      bgImage="url('/img/space-bg.jpg')"
      width="100%"
      minH="100vh"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="top center"
      {...props}
    >
      {children}
    </Box>
  )
}
