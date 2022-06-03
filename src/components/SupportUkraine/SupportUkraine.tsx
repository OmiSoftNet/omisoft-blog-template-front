import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";
import { TABLET_MEDIA_QUERY } from "../../constants/breakpoints";
import Container from "../Container";
import { SupportT as Props } from "../../types/support";
import * as gtag from "../../utils/gtag";
import {
  Content,
  DonateButton,
  ImageWrapper,
  Wrapper,
  StyledLink,
  StyledImg,
  TopBanner,
} from "./styles";

const SupportUkraine: React.FC<Props> = ({ top = false }) => {
  const isTablet = useMediaQuery(TABLET_MEDIA_QUERY);
  const { t } = useTranslation();

  return (
    <Wrapper className={top ? "topBanner" : "bottomBaner"}>
      <Container fullHeight>
        <Content>
          <ImageWrapper className={top ? "topBanner" : "bottomBaner"}>
            {top ? (
              <TopBanner>
                <StyledImg
                  loading="lazy"
                  src="/images/stop.svg"
                  alt="Support Ukraine"
                  className={top ? "topBanner" : "bottomBaner"}
                />
                <StyledImg
                  loading="lazy"
                  src="/images/support.svg"
                  alt="Support Ukraine"
                  className={top ? "topBanner" : "bottomBaner"}
                />
              </TopBanner>
            ) : (
              <StyledImg
                loading="lazy"
                src={`/images/support-ukraine-title@${
                  isTablet ? "tablet" : "mobile"
                }.svg`}
                alt="Support Ukraine"
              />
            )}
          </ImageWrapper>
          <StyledLink
            onClick={() =>
              gtag.event({
                action: "help_ukraine_click",
              })
            }
            href="https://www.comebackalive.in.ua/"
            target="_blank"
            rel="nofollow noopener"
          >
            <DonateButton className={top ? "topBanner" : "bottomBaner"}>
              {t("donate")}
            </DonateButton>
          </StyledLink>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default SupportUkraine;
