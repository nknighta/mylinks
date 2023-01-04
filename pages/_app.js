import {ChakraProvider} from "@chakra-ui/react";
import {BasicTheme} from "../components/BasicTheme";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
      <ChakraProvider>
        <BasicTheme>
            <Component {...pageProps} />
            <Analytics/>
        </BasicTheme>
      </ChakraProvider>
  )
}
