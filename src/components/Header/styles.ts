import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { tablet } from "../../constants/breakpoints";
import COLORS from "../../constants/colors";

export const StyledWrapper = styled("div")(() => ({
  borderBottom: `1px solid ${COLORS.BLOG_GRID_ROWS_2}`,
  zIndex: 2,
  position: "relative",
}));

export const ItemMenu = styled("a")(() => ({
  color: COLORS.MAIN,
  fontWeight: 600,
  cursor: "pointer",
}));

export const InnerWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 60,
  ...tablet({
    height: 84,
  }),
}));

export const MenuWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
}));

export const BurgerButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 1),
}));

export const Burger = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: 16,
  width: 33,
}));

export const BurgerBar = styled("div")(() => ({
  height: 2,
  borderRadius: 1,
  background: COLORS.MAIN,
}));
