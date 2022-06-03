import { styled } from "@mui/material";
import COLORS from "../../constants/colors";
import { PROXIMA_NOVA, MONTSERRAT } from "../../constants/fonts";
import { tablet } from "../../constants/breakpoints";

export const Wrapper = styled("div")(({ theme }) => ({
  filter: "drop-shadow(4px 4px 25px rgba(0, 0, 0, 0.15))",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "fixed",
  width: "280px",
  padding: "20px 0px",
  height: "auto",
  margin: "0 auto",
  background: COLORS.WHITE,
  borderRadius: "12px",
  zIndex: 7,
  ...tablet({
    padding: "30px 40px",
    width: "450px",
  }),
}));

export const Title = styled("div")(({}) => ({
  textAlign: "center",
  fontFamily: MONTSERRAT,
  fontWeight: 600,
  fontSize: 20,
  marginBottom: 30,
  ...tablet({
    marginBottom: 50,
  }),
}));

export const Button = styled("div")(({}) => ({
  margin: "0 auto",
  borderRadius: 8,
  background: COLORS.BUTTON_LINEAR,
  textTransform: "uppercase",
  textAlign: "center",
  padding: "15px 50px",
  width: "50%",

  color: COLORS.WHITE,
  fontWeight: 700,
  fontSize: 17,
  font: PROXIMA_NOVA,
  cursor: "pointer",
  ...tablet({
    width: "245px",
  }),
}));
