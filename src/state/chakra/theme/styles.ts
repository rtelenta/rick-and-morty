import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("gray.100", "gray.800")(props),
    },
  }),
};

export default styles;
