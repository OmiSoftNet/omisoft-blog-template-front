import { styled } from "@mui/material";
import Image from "next/image";
import { desktop, tablet } from "../../constants/breakpoints";
import COLORS from "../../constants/colors";

export const PostWrapper = styled("div")(({ theme }) => ({
  background: COLORS.SECONDARY,
  borderRadius: 10,
  overflow: "hidden",
}));

export const ImageWrapper = styled("div")(({ theme }) => ({
  height: "37vw",
  position: "relative",
  backgroundColor: COLORS.BLOG_GRID_ROWS_2,
  backgroundImage: " url('/images/feather.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  ...tablet({
    height: 222,
  }),

  ...desktop({
    height: 287,
  }),
}));

export const StyledImage = styled(Image)(({ theme }) => ({
  width: "100%",
  overflow: "hidden",
  display: "block",
}));

export const PostBody = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),

  ...tablet({
    padding: theme.spacing(4),
  }),
}));

export const PostTitle = styled("h2")(({ theme }) => ({
  fontSize: 17,
  fontWeight: 700,
  margin: 0,
  color: COLORS.GRAY,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  " -webkit-line-clamp": 2,
  lineClamp: 2,
  WebkitBoxOrient: "vertical",

  ...tablet({
    fontSize: 22,
  }),
}));

export const PostText = styled("p")(({ theme }) => ({
  color: COLORS.GRAY_SHORT_DESCRIPTION,
  margin: 0,
  fontSize: 14,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  " -webkit-line-clamp": 4,
  lineClamp: 4,
  WebkitBoxOrient: "vertical",
  lineHeight: "160%",

  ...tablet({
    fontSize: 16,
  }),
}));
export const PostTextWrapper = styled("div")(({ theme }) => ({
  height: 76,
  marginBottom: 15,
  ...tablet({ height: 104 }),
}));
export const PostFooter = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
}));

export const DateWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const DateText = styled("span")(({ theme }) => ({
  color: COLORS.MAIN,
}));

export const StyledLink = styled("div")(({ theme, className }) => ({
  height: 35,
  display: className?.includes("flexStyle") ? "flex" : "block",
  alignItems: "center",
  textDecoration: "none",
  cursor: "pointer",
  lineHeight: 10,
  marginBottom: theme.spacing(1),

  ...tablet({
    height: 42,
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
  }),
  ...desktop({
    height: 45,
  }),
}));

export const ReadMoreLabel = styled("span")(({ theme }) => ({
  color: COLORS.MAIN,
  fontSize: 18,
  fontWeight: 700,
  cursor: "pointer",
}));

export const StyledImagePlaceholder = styled("div")(({ theme }) => ({
  width: "auto",
  backgroundColor: COLORS.BLOG_GRID_ROWS_2,
  backgroundImage: " url('/images/feather.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}));

export const CustomLink = styled("a")(({ theme }) => ({}));
