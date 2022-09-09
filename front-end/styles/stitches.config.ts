import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "#FEDBD0",
      dark: "#442C2E",
      secondary: "#FEEAE6",
    },
  },
  media: {
    bp1: "(min-width: 640px)",
    bp3: "(min-width: 1024px)",
  },
});
