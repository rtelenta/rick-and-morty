import { extendTheme, theme } from "@chakra-ui/react";
import styles from "./styles";
import config from "./config";

const overrides = {
  styles,
  config,
  fonts: {
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
};

export default extendTheme(overrides, theme);
