import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Routes } from "../../config/routes";
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from "../../constants/breakpoints";
import Container from "../Container";
import MobileMenu from "./MobileMenu";
import {
  Burger,
  BurgerBar,
  BurgerButton,
  InnerWrapper,
  ItemMenu,
  MenuWrapper,
  StyledWrapper,
} from "./styles";

import { StyledLink } from "../common/styles";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const isTablet = useMediaQuery(TABLET_MEDIA_QUERY);
  const isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isTablet) setMenuOpen(false);
  }, [isTablet]);

  return (
    <>
      <StyledWrapper>
        <Container>
          <InnerWrapper>
            <StyledLink href={Routes.Root}>OmiSoft Blog</StyledLink>
            {isMobile && (
              <BurgerButton
                aria-label="Menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Burger>
                  <BurgerBar />
                  <BurgerBar />
                  <BurgerBar />
                </Burger>
              </BurgerButton>
            )}

            {isTablet && (
              <MenuWrapper>
                <Link href={Routes.Blog} passHref>
                  <ItemMenu>{t("blog")}</ItemMenu>
                </Link>
              </MenuWrapper>
            )}
          </InnerWrapper>
        </Container>
      </StyledWrapper>
      <MobileMenu isMenuOpen={menuOpen} />
    </>
  );
};

export default Header;
