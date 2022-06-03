import { Button, styled } from "@mui/material";
import COLORS from "../../../constants/colors";
import { MONTSERRAT } from "../../../constants/fonts";
import { tablet } from "../../../constants/breakpoints";

export const MenuWrapper = styled("div")(({ className }) => ({
  position: "fixed",
  height: "100%",
  top: className?.includes("closed") ? "-100%" : 40,
  opacity: className?.includes("closed") ? 0 : 1,
  transition: "0.5s top, 0.3s opacity",
  background: COLORS.WHITE,
  width: "100vw",
  zIndex: 1,
}));
export const WaveContainer = styled("div")(({ className }) => ({
  backgroundImage: `url('/images/rectangle.png')`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
}));

export const ImageWrapper = styled("div")(({ className }) => ({
  marginTop: "60px",

  ...tablet({
    display: "none",
  }),
}));

export const ButtonLink = styled(Button)(({ theme }) => ({
  background: COLORS.BUTTON_LINEAR,
  color: COLORS.WHITE,
  fontFamily: MONTSERRAT,
  padding: theme.spacing(2, 4),
  borderRadius: 12,
  fontWeight: "bold",
}));
export const ImageLink = styled("a")(({ theme }) => ({
  position: "relative",
  display: "block",
  width: 38,
  height: 38,
}));

export const Socials = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(4),
  marginTop: 16,
}));
export const LinkWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50vh",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
}));
export const StyledLink = styled("a")(() => ({
  color: COLORS.MAIN,
  fontWeight: 600,
  fontSize: 17,
  textDecoration: "none",
  margin: "auto",
}));

export const StyledBlogLink = styled("a")(() => ({
  color: COLORS.WHITE,
  fontWeight: 600,
  fontSize: 17,
  textDecoration: "none",
  width: 240,
}));
