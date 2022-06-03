import { Button, PaginationItem, Stack, styled } from "@mui/material";
import { tablet, desktop, phone_tablet } from "../../constants/breakpoints";
import { MONTSERRAT, PROXIMA_NOVA } from "../../constants/fonts";
import COLORS from "../../constants/colors";

export const StyledTitle = styled("h1")(() => ({
  fontWeight: 700,
  fontSize: 22,
  color: COLORS.MAIN,
  margin: "30px 0",

  ...tablet({
    fontSize: 32,
    margin: "80px 0 30px",
  }),
  ...desktop({ marginTop: 44 }),
}));

export const StyledChip = styled("div")(({ theme }) => ({
  padding: "8px 15px",
  fontWeight: 600,
  fontSize: 16,
  border: "none",
  color: COLORS.MAIN,
  background: COLORS.SECONDARY,
  borderRadius: 50,
}));

export const BlogContainer = styled("div")(() => ({
  background: COLORS.SECONDARY,
  borderRadius: "15px",
  position: "relative",
  top: "-80px",
  ...desktop({
    top: "0",
  }),
}));

export const PostTitle = styled("h2")(() => ({
  fontWeight: 700,
  fontSize: 22,
  color: COLORS.MAIN,

  ...tablet({
    fontSize: 32,
  }),
}));

export const TopicTitle = styled("h1")(() => ({
  fontWeight: 600,
  fontSize: 17,
  fontFamily: MONTSERRAT,
  textAlign: "left",
  marginTop: 16,
  marginBottom: 12,
  ...tablet({
    fontSize: 22,
    margin: "30px 0",
  }),
  ...desktop({
    fontWeight: 700,
    fontSize: 28,
  }),
}));
export const PostLine = styled("div")(() => ({
  height: 1,
  width: "100%",
  background: COLORS.BLOG_GRID_ROWS_2,

  marginBottom: 15,
  marginTop: 15,
}));

export const PaginationWrapper = styled("div")(({ theme }) => ({
  margin: "30px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  ...tablet({
    margin: "50px 0",
  }),
}));

export const StyledPaginationItem = styled(PaginationItem)(
  ({ theme, "aria-current": ariaCurrent }) => ({
    width: 36,
    height: 36,
    borderRadius: 18,
    color: ariaCurrent ? COLORS.WHITE : COLORS.GRAY_FOR_TEXT,
    backgroundColor: ariaCurrent ? `${COLORS.MAIN} !important` : "transparent",
    margin: 0,
    ...tablet({
      margin: theme.spacing(0, 0.5),
    }),
  })
);

export const StyledLink = styled("a")(() => ({
  color: COLORS.MAIN,
  fontWeight: 600,
  textDecoration: "none",
  cursor: "pointer",
}));

export const TopicWrapper = styled("div")(() => ({
  ...desktop({
    marginBottom: 120,
  }),
}));

export const TopicFooter = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  ...tablet({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  ...desktop({
    alignItems: "flex-start",
  }),
}));

export const Cover = styled("div")(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.15)",
  position: "fixed",
  zIndex: 6,
  width: "100%",
  height: "100%",
}));

export const RatingTitle = styled("div")(({ theme }) => ({
  fontWeight: 600,
  fontSize: 17,
  color: COLORS.GRAY,
}));
export const RatingSubtitle = styled("div")(({ theme }) => ({
  fontWeight: 400,
  fontSize: 15,
  color: COLORS.GRAY_LIGTHER,
}));

export const ImageRating = styled("div")(({ theme }) => ({
  height: 16,
  backgroundImage: `url('/images/ratingsmall.webp')`,
  backgroundRepeat: "no-repeat",
}));

export const InfoWrapper = styled("div")(({ theme }) => ({
  marginLeft: 15,
}));

export const ImageLogo = styled("div")(({ theme }) => ({
  position: "relative",
  height: 112,
  width: 112,
  backgroundImage: `url('/images/logo.webp')`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",

  ...tablet({
    width: 90,
    height: 90,
  }),
}));
export const ImageGoogle = styled("div")(({ theme }) => ({
  minWidth: "160px",
  minHeight: "50px",
  backgroundImage: `url('/images/google@desktop.webp')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  marginRight: 10,

  ...tablet({
    margin: 0,
    width: 170,
    height: 50,
  }),

  ...desktop({
    width: "9vw",
    height: "3vw",
    marginRight: "10px",
  }),
}));

export const ImageAppStore = styled("div")(({ theme }) => ({
  minWidth: "160px",
  minHeight: "50px",
  backgroundImage: `url('/images/app-store@desktop.webp')`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  marginLeft: 10,

  ...tablet({
    margin: 0,
    width: 170,
    height: 50,
  }),

  ...desktop({
    width: "9vw",
    height: "3vw",
  }),
}));

export const GoogleAppWrapper = styled("div")(({ theme }) => ({
  justifyContent: "center",
  width: "100%",
  margin: "20px 0 40px",
  display: "flex",

  ...tablet({
    justifyContent: "space-around",
  }),

  ...desktop({
    justifyContent: "space-around",
  }),
}));

export const ScreensWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundImage: `url('/images/main@desktop.webp')`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: "240px",
  width: "200px",
  alignSelf: "center",
  marginBottom: 40,
  top: 80,

  ...tablet({
    width: 270,
    height: 330,
    margin: "0 0 40px 0",
  }),
  ...desktop({
    minWidth: 270,
    minHeight: 330,
    margin: "unset",
    top: 80,
  }),
}));

export const PostWrapper = styled("div")(({ theme }) => ({
  margin: 50,
}));
export const Content = styled("div")(({ theme }) => ({
  minHeight: "100%",

  ...desktop({
    width: "calc((100%/6) * 4)",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
  }),
}));

export const Topic = styled("div")(({ theme }) => ({
  maxWidth: 850,
  ...desktop({
    marginRight: 20,
  }),
}));

export const OmisoftBlogPro = styled("div")(({ theme }) => ({
  ...tablet({
    marginLeft: "20px",
  }),
}));

export const AdditionalWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  margin: 10,

  ...tablet({
    margin: 20,
  }),
  ...desktop({
    margin: 0,
  }),
}));

export const PlayButton = styled("div")(({ theme }) => ({
  background: "linear-gradient(93.62deg, #69BDFF 3.14%, #2196F3 87.37%)",
  filter: "drop-shadow(0px 11px 22px rgba(44, 131, 200, 0.26))",
  borderRadius: 12,
  margin: "20px auto",
  padding: 15,
  fontFamily: PROXIMA_NOVA,
  textTransform: "uppercase",
  textAlign: "center",
  width: 287,
  cursor: "pointer",

  fontWeight: 700,
  fontSize: 17,

  color: COLORS.WHITE,
  ...tablet({
    width: "100%",
  }),
}));

export const BackScreen = styled("div")(({ theme }) => ({
  height: 150,
  background: COLORS.SECONDARY,
  borderRadius: 15,

  ...tablet({}),
}));

export const AdvertaismentContainer = styled("div")(({ theme }) => ({
  width: "110%",
  position: "relative",
  left: "-5%",

  ...tablet({
    left: "unset",
    width: "100%",
    margin: "0 auto",
    maxWidth: 410,
  }),

  ...desktop({
    width: 410,
  }),
}));

export const DateWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: 15,
  ...tablet({
    marginBottom: 0,
    marginLeft: 15,
  }),
  ...desktop({
    paddingTop: 9,
  }),
}));

export const StyledContent = styled("div")(({ theme }) => ({
  flexGrow: 1,
}));

export const StyledStack = styled(Stack)(({}) => ({
  flexWrap: "wrap",
  justifyContent: "center",
  gridGap: 15,
  ...desktop({
    justifyContent: "flex-start",
  }),
}));

export const ScreenBlock = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
  zIndex: 2,
}));
export const MarketLink = styled("div")(({ theme }) => ({
  cursor: "pointer",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: " 5%",
  width: "300px",

  ...tablet({
    width: "400px",
  }),
}));

export const MainWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  overflowX: "hidden",
}));

export const StyledBlockPlaceholder = styled("div")(({ theme }) => ({
  height: 200,
  backgroundColor: COLORS.BLOG_GRID_ROWS_2,
  backgroundImage: " url('/images/feather.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  ...tablet({
    height: 374,
  }),

  ...desktop({
    height: 463,
  }),
}));

export const PageNotFoundWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  ...tablet({}),

  ...desktop({
    height: "75vh",
    position: "relative",
    flexDirection: "row",
  }),
}));

export const PageNotFoundTitle = styled("div")(({ theme }) => ({
  fontWeight: 700,
  fontSize: 23,
  color: COLORS.MAIN,
  textTransform: "uppercase",

  ...tablet({
    fontSize: 32,
  }),
}));

export const PageNotFoundInfo = styled("div")(({ theme }) => ({
  margin: "40px 0",

  ...desktop({
    margin: "0px",
    alignSelf: "center",
  }),
}));
export const PageNotFoundText = styled("div")(({ theme }) => ({
  margin: "30px 0",
  fontSize: "16px",

  ...tablet({
    width: "40%",
  }),

  ...desktop({
    width: "75%",
  }),
}));

export const PageNotFoundButton = styled("div")(({ theme }) => ({
  height: "60px",
  width: "245px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "700",
  fontSize: "17px",
  lineHeight: "21px",
  background: `linear-gradient(93.62deg, #69BDFF 3.14%, #2196F3 87.37%)`,
  borderRadius: `12px`,
  color: COLORS.WHITE,
  cursor: "pointer",

  ...tablet({
    margin: "40px 0 0 0 ",
  }),
}));
export const PageNotFoundImage = styled("div")(({ theme }) => ({
  width: "100%",
  backgroundImage: `url(/images/404.webp)`,
  height: " 90vw",
  zIndex: -1,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  marginBottom: 40,

  ...tablet({
    alignSelf: "center",
    position: "relative",
    top: "-50px",
    height: "600px",
    marginBottom: 0,
  }),
  ...desktop({
    width: "78%",
    backgroundPositionY: "0",
    height: " 100%",
    backgroundPosition: "center",
    top: "unset",
  }),
}));
export const NewGameButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: 50,
  background: COLORS.BUTTON_LINEAR,
  borderRadius: 12,
  color: "white",
  fontSize: 17,
  fontWeight: 700,
  border: 0,
  outline: 0,
  fontFamily: MONTSERRAT,
  boxShadow: `0px ${theme.spacing(1.5)} ${theme.spacing(3)} ${COLORS.SHADOW}`,
  margin: "0 auto",
  display: "block",
  marginTop: theme.spacing(2.5),
  marginBottom: 30,
  textTransform: "uppercase",
  ...phone_tablet({ width: 322 }),
  ...tablet({
    marginTop: 0,
    width: 410,
  }),
}));

export const ButtonWrapper = styled("div")(() => ({
  padding: "0 28px ",
  ...tablet({
    padding: 0,
  }),
}));
export const Divider = styled("div")(() => ({
  height: 1,
  marginBottom: 10,
}));
