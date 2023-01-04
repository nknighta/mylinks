import {ChakraProvider} from "@chakra-ui/react";
import {BasicTheme} from "../components/BasicTheme";

export default function App({ Component, pageProps }) {
  return (
      <ChakraProvider>
        <BasicTheme>
            <Component {...pageProps} />
        </BasicTheme>
      </ChakraProvider>
  )
}
