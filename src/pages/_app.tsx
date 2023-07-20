import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import 'ress'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
