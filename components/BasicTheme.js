import { Box,Text } from "@chakra-ui/react";
import style from "./theme.module.sass"

export const BasicTheme = ({children}) => {
  return(
      <Box className={style.Main}>
          <Box className={style.header}>
              <Text>Nknight AMAIMIYA official v3</Text>
          </Box>
          {children}
      </Box>
  )
}