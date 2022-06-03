import { styled } from "@mui/material";
import COLORS from "../../constants/colors";
import { tablet, desktop } from "../../constants/breakpoints";

export const StyledFooter = styled("div")(() => ({
  background: COLORS.GRAY,
  marginTop: 51,
  ...desktop({
    marginTop: 0,
  }),
}));

export const MainFooterContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3.5, 0),

  ...tablet({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }),
}));

export const Divider = styled("div")(() => ({
  height: 1,
  background: COLORS.GRAY_FOR_TEXT,
}));

export const StyledLinks = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
  margin: theme.spacing(3, 0),
  ...tablet({
    flexDirection: "row",
    alignItems: "center",
    margin: theme.spacing(0, 0),
  }),
}));

export const Socials = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(4),
  position: "relative",
  ...tablet({
    alignItems: "center",
  }),
}));

export const ImageLink = styled("a")(({ theme }) => ({
  position: "relative",
  display: "block",
  width: 38,
  height: 38,
}));

export const InfoText = styled("p")(({ theme }) => ({
  textAlign: "center",
  margin: 0,
  padding: theme.spacing(2, 0),
  fontSize: 14,
  color: COLORS.WHITE,
}));
