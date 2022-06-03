import { createTheme } from "@mui/material";
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "./breakpoints";

export default createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: TABLET_BREAKPOINT,
      lg: DESKTOP_BREAKPOINT,
      xl: 1536,
    },
  },
});
