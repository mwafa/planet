import { Box } from "@chakra-ui/react"

import { Red } from "./Red"

export const Footer: React.FC = () => {
  return (
    <Box
      position="fixed"
      right="0"
      fontSize=".8em"
      bottom="0"
      color="white"
      p={2}
      style={{
        backdropFilter: "blur(10px)",
        boxShadow: "0px 0px 2px #eee",
        borderTopLeftRadius: "5px",
      }}
    >
      Design by: <Red>Irfan Valerian</Red> | Program By:{" "}
      <Red>
        <a href="//mwafa.net">mwafa</a>
      </Red>
    </Box>
  )
}
