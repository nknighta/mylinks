import { Box,Text } from "@chakra-ui/react";
import style from "./theme.module.sass"
import Head from "next/head"

export const BasicTheme = ({children}) => {
  return(
      <div>
          <Head>
              <title>Nknight AMAMIYA official</title>
              <link rel="icon" href="../public/favicon.ico"/>
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