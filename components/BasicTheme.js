import { Box,Text } from "@chakra-ui/react";
import style from "./theme.module.sass"
import Head from "next/head"

export const BasicTheme = ({children}) => {
  return(
      <div>
          <Head>
              <title>Nknight AMAMIYA official</title>
              <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png"/>
                  <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png"/>
                      <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png"/>
                          <link rel="manifest" href="../public/site.webmanifest"/>
                              <link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#000021"/>
                                  <meta name="msapplication-TileColor" content="#000021"/>
                                      <meta name="theme-color" content="#000021"/>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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