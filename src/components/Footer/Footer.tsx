import React from "react";
import { useTranslation } from "react-i18next";
import { Routes } from "../../config/routes";
import Container from "../Container";
import SupportUkraine from "../SupportUkraine";
import {
  Divider,
  ImageLink,
  InfoText,
  MainFooterContent,
  Socials,
  StyledFooter,
  StyledLinks,
} from "./styles";
import { StyledLink } from "../common/styles";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <SupportUkraine />
      <Container>
        <MainFooterContent>
          <StyledLinks>
            <StyledLink href={Routes.Blog}>{t("omisoftBlog")}</StyledLink>
            <StyledLink href={Routes.Privacy}>{t("privacyPolicy")}</StyledLink>
          </StyledLinks>
          <Socials>
            <ImageLink
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
        </MainFooterContent>
      </Container>
      <Divider />
      <Container>
        <InfoText>
          Copyright © 2022{" "}
          <StyledLink href="https://omisoft.net" target="_blank" rel="noopener">
            OmiSoft LLC
          </StyledLink>
          . All Rights Reserved
        </InfoText>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
