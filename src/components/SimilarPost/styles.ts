import { styled } from "@mui/material";
import Image from "next/image";
import { desktop, tablet } from "../../constants/breakpoints";
import COLORS from "../../constants/colors";

export const PostWrapper = styled("div")(({ theme }) => ({
  background: COLORS.SECONDARY,
  borderRadius: 10,
  overflow: "hidden",
  ...tablet({
    display: "flex",
  }),
}));

export const ImageWrapper = styled("div")(({ theme }) => ({
  height: "37vw",
  position: "relative",
  backgroundColor: COLORS.BLOG_GRID_ROWS_2,
  backgroundImage: " url('/images/feather.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  ...tablet({
    height: "auto",
    width: 180,
  }),
}));

export const StyledImage = styled(Image)(({ theme }) => ({
  width: 180,
  overflow: "hidden",
  display: "block",
}));

export const PostBody = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),

  ...tablet({
    width: "76%",
    padding: theme.spacing(4),
  }),
}));

export const PostTitle = styled("h2")(({ theme }) => ({
  fontSize: 17,
  fontWeight: 700,
  margin: 0,
  marginBottom: theme.spacing(1),
  color: COLORS.GRAY,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  " -webkit-line-clamp": 1,
  lineClamp: 1,
  WebkitBoxOrient: "vertical",

  ...tablet({
    fontSize: 22,
    marginBottom: theme.spacing(2),
  }),
}));

export const PostText = styled("p")(({ theme }) => ({
  color: COLORS.GRAY_SHORT_DESCRIPTION,
  margin: 0,
  marginBottom: theme.spacing(2),
  fontSize: 14,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  " -webkit-line-clamp": 3,
  lineClamp: 3,
  WebkitBoxOrient: "vertical",
  lineHeight: "160%",
  minHeight: 57,
  ...tablet({
    fontSize: 16,
    " -webkit-line-clamp": 2,
    lineClamp: 2,
    minHeight: 50,
  }),
}));

export const PostFooter = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
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

export const StyledLink = styled("a")(({ theme, className }) => ({
  display: className?.includes("flexStyle") ? "flex" : "block",
  alignItems: "center",
  textDecoration: "none",
  cursor: "pointer",

  ...tablet({
    gap: theme.spacing(1),
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
