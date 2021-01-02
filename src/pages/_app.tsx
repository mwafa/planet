import { AppProps } from "next/app"

import { ChakraProvider } from "@chakra-ui/react"

import { Fonts } from "../styles/Fonts"
import theme from "../theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
