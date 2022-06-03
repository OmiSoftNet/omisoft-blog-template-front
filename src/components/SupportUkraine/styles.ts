import { Button, styled } from "@mui/material";
import COLORS from "../../constants/colors";
import { MONTSERRAT } from "../../constants/fonts";
import { desktop, tablet } from "../../constants/breakpoints";

export const Wrapper = styled("div")(({ className }) => ({
  height: className?.includes("topBanner") ? "40px" : "90px",
  backgroundImage: `url('/images/help-ukraine-banner@mobile.webp')`,
  backgroundPositionX: "70%",

  ...tablet({
    height: className?.includes("topBanner") ? "50px" : "188px",
    backgroundImage: `url('/images/help-ukraine-banner@tablet.webp')`,
    backgroundPositionX: "75%",
  }),
  ...desktop({
    height: className?.includes("topBanner") ? "40px" : "188px",
    backgroundImage: `url('/images/help-ukraine-banner@desktop.webp')`,
    backgroundPositionX: "40%",
    backgroundSize: "auto 188px",
  }),
}));
export const TopBanner = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));
export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(2),
  height: "100%",

  ...tablet({
    gap: 0,
  }),
}));

export const ImageWrapper = styled("div")(({ className }) => ({
  width: className?.includes("topBanner") ? "70%" : "157px",
  position: "relative",

  ...tablet({
    width: className?.includes("topBanner") ? "67%" : "420px",
  }),
  ...desktop({
    width: className?.includes("topBanner") ? "40vw" : "563px",
  }),
}));

export const DonateButton = styled(Button)(({ className }) => ({
  width: 110,
  height: className?.includes("topBanner") ? "25px" : "",
  borderRadius: 16,
  background: COLORS.YELLOW_BUTTON_LINEAR,
  color: COLORS.WHITE,
  fontFamily: MONTSERRAT,
  fontWeight: 700,
  alignSelf: "center",

  ...tablet({
    width: className?.includes("topBanner") ? "150px" : "250px",
    borderRadius: 28,
    fontSize: className?.includes("topBanner") ? 16 : 18,
  }),
}));
export const StyledLink = styled("a")(() => ({
  color: COLORS.WHITE,
}));

export const StyledImg = styled("img")(({ theme, className }) => ({
  objectFit: "contain",
  width: className?.includes("topBanner") ? "45%" : "100%",
  position: className?.includes("topBanner") ? "unset" : "absolute",
  top: "50%",
  transform: className?.includes("topBanner") ? "unset" : "translate(0, -50%)",

  ...tablet({
    width: className?.includes("topBanner") ? "150px" : "100%",
  }),
}));
