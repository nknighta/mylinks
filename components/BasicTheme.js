import { Box,Text } from "@chakra-ui/react";
import style from "./theme.module.sass"
import Head from "next/head"

export const BasicTheme = ({
    children ,
    pageTitle,
    pageDescription,
    pagePath,
    pageImgWidth,
    pageImgHeight,
}) => {
    const pageUrl = "https://nknight-official.vercel.app/"
    const defaultTitle = 'nknight amamiya'
    const defaultDescription = 'Web3 development'
    const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
    const description = pageDescription ? pageDescription : defaultDescription
    const url = pagePath
    const imgWidth = pageImgWidth ? pageImgWidth : 1280
    const imgHeight = pageImgHeight ? pageImgHeight : 640
  return(
      <div>
          <Head>              
            <title>{title}</title>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={`https://nknight-official.vercel.app/header.png`} />
            <meta property="og:image:width" content={String(imgWidth)} />
            <meta property="og:image:height" content={String(imgHeight)} />
            <meta name="twitter:image" content={`https://nknight-official.vercel.app/header.png`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ama_dev_1" />
            <link rel="icon" href={"https://nknight-official.vercel.app/favicon.ico"} sizes="any" />
            <link rel="canonical" href={url} />
          </Head>
          <Box className={style.Main}>
              <Box className={style.header}>
                  <Text>Nknight AMAIMIYA</Text>
              </Box>
              {children}
          </Box>
      </div>
  )
}

