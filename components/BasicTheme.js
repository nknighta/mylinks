import { Box,Text } from "@chakra-ui/react";
import style from "./theme.module.sass"
import Head from "next/head"

export const BasicTheme = ({children}) => {
  return(
      <div>
          <Head>
              <title>Nknight AMAMIYA official</title>
              <link rel="icon" href="/favicon.ico"/>
              <meta name="twitter:image" content="https://nknight-official.vercel.app/images/favicon.png"/>
          </Head>
          <Box className={style.Main}>
              <Box className={style.header}>
                  <Text>Nknight AMAIMIYA official v3</Text>
              </Box>
              {children}
          </Box>
      </div>
  )
}