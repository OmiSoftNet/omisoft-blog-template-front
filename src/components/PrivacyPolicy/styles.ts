import { styled } from "@mui/material";
import COLORS from "../../constants/colors";
import { desktop, tablet } from "../../constants/breakpoints";

export const StyledTitle = styled("h1")(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: 17,
  textTransform: "uppercase",
  color: "#000000",
  ...tablet({
    fontWeight: 700,
    fontSize: 28,
  }),
}));
export const Text = styled("p")(({ theme }) => ({
  color: COLORS.GRAY_FOR_TEXT,
  margin: 0,
  fontStyle: "normal",
  fontWeight: 400,
  marginTop: theme.spacing(2),
  fontSize: 14,
  lineHeight: 1.4,
  ...tablet({
    fontSize: 16,
  }),
}));
export const SubTitle = styled("h2")(({ theme }) => ({
  fontWeight: 600,
  fontSize: 17,
  color: COLORS.GRAY_FOR_TEXT,
  marginTop: 30,
  ...tablet({
    fontWeight: 700,
    fontSize: 20,
    marginTop: 40,
  }),
}));
export const SecondSubTitle = styled("h3")(({ theme }) => ({
  fontWeight: 600,
  fontSize: 16,

  color: COLORS.GRAY_FOR_TEXT,
  ...tablet({
    fontWeight: 700,
    fontSize: 19,
  }),
  ...desktop({
    marginTop: 96,
  }),
}));
export const List = styled("ul")(({ theme }) => ({
  listStyle: "none",
}));
export const ListItem = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
}));
export const ListDots = styled("img")(({ theme }) => ({
  width: 8,
  height: 8,
  marginRight: 10,
  ...tablet({
    marginRight: 14,
    width: 14,
    height: 14,
  }),
}));
export const StyledLink = styled("a")(({ theme }) => ({
  color: COLORS.MAIN,
}));
export const StyledButton = styled("div")(({ theme }) => ({
  fontWeight: 600,
  fontSize: 14,
  cursor: "pointer",
  textTransform: "uppercase",
  color: COLORS.MAIN,
  ...tablet({
    fontSize: 18,
  }),
}));
export const GoBackWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: "20px 0",
  ...tablet({ margin: "30px 0" }),
  ...desktop({ margin: "20px 0" }),
}));
export const PrivacyWrapper = styled("div")(({ theme }) => ({
  marginBottom: 40,
  ...tablet({
    marginBottom: 80,
  }),
  ...desktop({
    maxWidth: "50vw",
    margin: "0 auto",
    marginBottom: 120,
  }),
}));
