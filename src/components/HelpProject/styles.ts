import { Button, DialogContent, DialogTitle, styled } from "@mui/material";
import { desktop, tablet, phone_tablet } from "../../constants/breakpoints";
import COLORS from "../../constants/colors";
import { MONTSERRAT, PROXIMA_NOVA } from "../../constants/fonts";

export const MainWrapper = styled("div")(({ theme }) => ({
  paddingTop: 30,
  display: "flex",
  justifyContent: "center",
  marginTop: "7%",
  ...desktop({
    margin: 0,
    paddingTop: 30,
  }),
}));
export const StyledButton = styled("button")(() => ({
  border: 0,
  padding: "10px 20px",
  background: "rgb(33, 150, 243);",
  color: "white",
  fontSize: 20,
  borderRadius: 4,
  cursor: "pointer",
  marginTop: 50,
}));
export const HeplSectionWrapper = styled("div")(() => ({
  padding: "0px 16px",
  height: "auto",
  margin: "0 auto",
}));
export const ModalHeader = styled("section")(() => ({
  display: "flex",
  padding: 20,
}));
export const CloseButton = styled("button")(() => ({
  alignSelf: "center",
  padding: 0,
  background: "transparent",
  fontSize: "1.6rem",
  color: "#666",
}));

export const HelpSiteContainer = styled("div")(({ theme }) => ({
  position: "relative",
  marginBottom: 30,
  width: "100vw",
  marginRight: 0,
  ...tablet({
    marginBottom: 20,
    maxWidth: 410,
  }),
  ...desktop({
    width: "100%",
  }),
}));
export const BlueBox = styled("div")(() => ({
  position: "relative",
  background: COLORS.SECONDARY,
  width: "110%",
  marginLeft: "-5%",
  padding: "20px 44px 40px",

  ...tablet({
    borderRadius: "15px",
    width: 410,
    margin: 0,
  }),
  ...desktop({
    margin: 0,
    width: 410,
  }),
  ...desktop({ padding: "0px 44px 40px" }),
}));
export const StyledTextTitle = styled("h4")(() => ({
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 28,
  color: COLORS.MAIN,
}));
export const StyledText = styled("p")(() => ({
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 18,
  color: COLORS.GRAY,
  lineHeight: "22px",
  margin: "30px 0",
  ...desktop({ margin: "20px 0" }),
}));
export const TitleShareLink = styled("div")(() => ({
  fontFamily: PROXIMA_NOVA,
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 15,
  width: "20%",
  lineHeight: 1.2,
  textTransform: "uppercase",
}));
export const ShareLinkBox = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
export const SocialIconsContainer = styled("div")(() => ({
  background: COLORS.SHARE_MODAL_LINEAR,
  boxShadow: "0px 16px 40px rgba(60, 133, 191, 0.18)",
  borderRadius: 15,
  paddingBottom: 40,
  ...phone_tablet({
    width: "60vw",
  }),
  ...tablet({
    width: 630,
    height: 425,
    padding: "53px",
  }),
}));
export const SubscribeText = styled("p")(() => ({
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "18px",
  color: COLORS.GRAY_LIGTHER,
  textAlign: "center",
}));
export const SubscribeBox = styled("div")(() => ({
  marginTop: 40,
  ...desktop({
    marginTop: 20,
  }),
}));
export const Socials = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(4),
  marginTop: 20,
  ...desktop({ marginTop: 17 }),
}));
export const ImageLink = styled("a")(() => ({
  position: "relative",
  display: "block",
  width: 38,
  height: 38,
}));
export const BoldText = styled("span")(() => ({
  fontWeight: 700,
}));
export const ShareButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: 50,
  background: COLORS.BUTTON_LINEAR,
  borderRadius: 12,
  color: COLORS.WHITE,
  fontSize: 17,
  fontWeight: 700,
  border: 0,
  outline: 0,
  fontFamily: PROXIMA_NOVA,
  boxShadow: `0px ${theme.spacing(1.5)} ${theme.spacing(3)} ${COLORS.SHADOW}`,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  ...tablet({
    width: "100%",
  }),
}));
export const StyledShareImg = styled("img")(() => ({
  marginLeft: 8,
  width: 26,
  height: 22,
  fill: COLORS.WHITE,
}));
export const ModalTitle = styled(DialogTitle)(() => ({
  fontFamily: MONTSERRAT,
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: 26,
  color: COLORS.DEEP_BLUE,
  textTransform: "uppercase",
  marginTop: 20,
  marginBottom: 2,
  textAlign: "center",
  padding: 0,
  ...tablet({ fontSize: 40, marginBottom: 25, marginTop: 0 }),
}));
export const ShareIcons = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
}));
export const ShareIconsItems = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  ...tablet({
    width: 356,
    flexDirection: "row",
    justifyContent: "space-between",
  }),
}));
export const StyledButtonIcon = styled("div")(({ theme }) => ({
  width: "50vw",
  background: COLORS.WHITE,
  borderRadius: 10,
  boxShadow: COLORS.SHADOW,
  padding: "10px 10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
  marginTop: 15,
  ...phone_tablet({ width: "40vw" }),
  ...tablet({
    width: 168,
  }),
}));

export const ShareIconWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));
export const ShareButtonText = styled("p")(() => ({
  fontFamily: MONTSERRAT,
  color: COLORS.Deep_GRAY,
  fontSize: 16,
  fontWeight: 500,
  marginLeft: 12,
}));

export const StyledCloseButton = styled("button")(() => ({
  border: "none",
  borderRadius: "50%",
  background: "transparent",
  cursor: "pointer",
}));
export const CloseButtonWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row-reverse",
  paddingTop: 3,
  paddingRight: 3,
  ...tablet({
    position: "absolute",
    right: "-55px",
    top: "-25px",
  }),
}));
export const CopyLinkContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2.5),
}));
export const TextLink = styled("div")(() => ({
  display: "none",
  ...tablet({
    display: "block",
  }),
}));
export const ContentBox = styled("div")(() => ({
  marginLeft: "auto",
  marginRight: "auto",
  position: "relative",
  ...phone_tablet({
    maxWidth: 322,
  }),
  ...tablet({
    paddingTop: 15,
  }),
  ...desktop({ margin: 0 }),
}));
export const StyledDialogContent = styled(DialogContent)(() => ({
  marginLeft: "auto",
  marginRight: "auto",
}));
