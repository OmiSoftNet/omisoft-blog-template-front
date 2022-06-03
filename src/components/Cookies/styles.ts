import { styled } from "@mui/material";
import COLORS from "../../constants/colors";
import { desktop, tablet } from "../../constants/breakpoints";

export const CookiesBox = styled("div")(({ theme }) => ({
  width: "80%",
  zIndex: 10000,
  borderRadius: 15,
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  position: "fixed",
  bottom: "20px",
  left: "50%",
  transform: "translate(-50%, 0)",
  background: COLORS.WHITE,
  padding: 20,
  boxShadow: "0px 4px 20px rgba(60, 133, 191, 0.18)",
  ...tablet({
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
  }),
  ...desktop({
    width: "50%",
    maxWidth: 930,
  }),
}));

export const Button = styled("button")(({ theme }) => ({
  width: 130,
  height: 40,
  background: COLORS.ELEMENTS,
  borderRadius: "8px",
  cursor: "pointer",
  outline: "none",
  border: "none",
  fontWeight: "700",
  fontSize: "14px",
  textTransform: "uppercase",
  alignSelf: "center",
  color: COLORS.WHITE,
  ...tablet({
    padding: "6px 30px",
  }),
  ...desktop({
    padding: "10px 40px",
  }),
}));

export const Text = styled("span")(({ theme }) => ({
  textAlign: "center",
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "20px",
  color: COLORS.GRAY_FOR_TEXT,
  margin: "10px",

  ...tablet({
    textAlign: "left",
  }),
}));

export const CoockieImg = styled("img")(({ theme }) => ({
  alignSelf: "center",
  width: 36,
  height: 36,
}));
