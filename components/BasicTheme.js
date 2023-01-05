import { Box,Text } from "@chakra-ui/react";
import style from "./theme.module.sass"
import Head from "next/head"

export const BasicTheme = ({children ,title, description, ogImage, url }) => {
    const pageUrl = "https://nknight-official.vercel.app/"
    const ogImg = "/favicon.ico";
  return(
      <div>
          <Head>
              <title>Nknight AMAMIYA official</title>
              <link rel="icon" href="/favicon.ico"/>
              <meta
                  name="twitter:description"
                  content={
                      description
                          ? description
                          : "ページディスクリプション"
                  }
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={title ? title : "ブログタイトル"} />
              <meta name="twitter:image" content={url ? url : ogImg} />
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