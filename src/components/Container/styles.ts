import { styled } from "@mui/material";
import { desktop, tablet } from "../../constants/breakpoints";

export const StyledContainer = styled("div")(({ theme, className }) => ({
  padding: theme.spacing(0, 2),
  height: className?.includes("fullHeight") ? "100%" : "auto",
  margin: "0 auto",

  ...tablet({
    padding: '0 40px',
  }),
  ...desktop({
    padding: 0,
    width: 'calc((100%/6) * 4)',
    display: 'flex',
    flexDirection: 'column'
  }),
}));
