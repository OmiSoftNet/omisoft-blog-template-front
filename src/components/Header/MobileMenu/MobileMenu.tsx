import React, { useEffect } from "react";
import { Routes } from "../../../config/routes";
import { useTranslation } from "react-i18next";
import * as gtag from "../../../utils/gtag";
import {
  ButtonLink,
  MenuWrapper,
  ImageLink,
  Socials,
  LinkWrapper,
  StyledLink,
  StyledBlogLink,
  WaveContainer,
} from "./styles";

type Props = {
  isMenuOpen: boolean;
};

const MobileMenu: React.FC<Props> = ({ isMenuOpen }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <MenuWrapper className={isMenuOpen ? "opened" : "closed"}>
      <WaveContainer>
        <LinkWrapper>
          <StyledLink href={Routes.Root}>{t("home")}</StyledLink>

          <ButtonLink>
            <StyledBlogLink href={Routes.Root}>Read Blog</StyledBlogLink>
          </ButtonLink>

          <StyledLink href={Routes.Blog}>{t("readBlog")}</StyledLink>

          <Socials>
            <ImageLink
              onClick={() =>
                gtag.event({
                  action: "open_twitter",
                })
              }
              href="https://twitter.com/sudokuproapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="38px"
                height="38px"
                src="/images/twitter.svg"
                alt="twitter page"
              />
            </ImageLink>
            <ImageLink
              onClick={() =>
                gtag.event({
                  action: "open_instagram",
                })
              }
              href="https://www.instagram.com/sudokupro.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="38px"
                height="38px"
                src="/images/instagram.svg"
                alt="instagram page"
              />
            </ImageLink>
            <ImageLink
              onClick={() =>
                gtag.event({
                  action: "open_facebook",
                })
              }
              href="https://www.facebook.com/sudokuproapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="38px"
                height="38px"
                src="/images/facebook.svg"
                alt="facebook page"
              />
            </ImageLink>
          </Socials>
        </LinkWrapper>
      </WaveContainer>
    </MenuWrapper>
  );
};

export default MobileMenu;
