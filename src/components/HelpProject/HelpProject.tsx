import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
import {
  BlueBox,
  HelpSiteContainer,
  StyledTextTitle,
  StyledText,
  ShareLinkBox,
  SocialIconsContainer,
  SubscribeBox,
  SubscribeText,
  ImageLink,
  Socials,
  MainWrapper,
  BoldText,
  StyledShareImg,
  ShareButton,
  ModalTitle,
  ShareIcons,
  ShareIconsItems,
  StyledButtonIcon,
  ShareButtonText,
  StyledCloseButton,
  CloseButtonWrapper,
  ShareIconWrapper,
  ContentBox,
  StyledDialogContent,
} from "./styles";

import { useRouter } from "next/router";
import * as gtag from "../../utils/gtag";
import { Dialog } from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const HelpProject: React.FC = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: { code: string }) => {
      if (e.code === "Escape") {
        onCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const urlToShare = "";
  const contentToShare = "";

  const onOpenModal = () => {
    setShowModal(true);
  };
  const onCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <MainWrapper>
        <HelpSiteContainer>
          <BlueBox>
            <ContentBox>
              <StyledTextTitle>{t("helpUsGrow")}</StyledTextTitle>
              <StyledText>
                {t("helpUsGrowText")}
                <BoldText>{t("pleaseShareIt")}</BoldText>
                {t("itWillHelpUs")}
              </StyledText>
              <ShareLinkBox>
                <ShareButton onClick={() => onOpenModal()}>
                  {t("share")}
                  <StyledShareImg src="/images/share.svg" alt="share icon" />
                </ShareButton>
              </ShareLinkBox>
              <SubscribeBox>
                <SubscribeText> {t("subscribeText")}</SubscribeText>
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
              </SubscribeBox>
            </ContentBox>
          </BlueBox>
        </HelpSiteContainer>
      </MainWrapper>
      <Dialog
        PaperProps={{
          style: {
            position: "relative",
            overflow: "unset",
            borderRadius: "15px",
          },
        }}
        open={showModal}
        TransitionComponent={Transition}
      >
        <SocialIconsContainer>
          <CloseButtonWrapper>
            <StyledCloseButton onClick={() => onCloseModal()}>
              <img
                width="40px"
                height="40px"
                src="/images/exit.svg"
                alt="exit"
              />
            </StyledCloseButton>
          </CloseButtonWrapper>
          <StyledDialogContent>
            <ModalTitle>{t("shareContent")}</ModalTitle>
            <ShareIcons>
              <ShareIconsItems>
                <StyledButtonIcon>
                  <FacebookShareButton url={urlToShare}>
                    <ShareIconWrapper
                      onClick={() =>
                        gtag.event({
                          action: "share_facebook",
                        })
                      }
                    >
                      <FacebookIcon size={24} round />
                      <ShareButtonText>{t("facebook")}</ShareButtonText>
                    </ShareIconWrapper>
                  </FacebookShareButton>
                </StyledButtonIcon>

                <StyledButtonIcon>
                  <TwitterShareButton url={contentToShare}>
                    <ShareIconWrapper
                      onClick={() =>
                        gtag.event({
                          action: "share_twitter",
                        })
                      }
                    >
                      <TwitterIcon size={24} round />
                      <ShareButtonText>{t("twitter")}</ShareButtonText>
                    </ShareIconWrapper>
                  </TwitterShareButton>
                </StyledButtonIcon>
              </ShareIconsItems>
              <ShareIconsItems>
                <StyledButtonIcon>
                  <TelegramShareButton url={contentToShare}>
                    <ShareIconWrapper
                      onClick={() =>
                        gtag.event({
                          action: "share_telegram",
                        })
                      }
                    >
                      <TelegramIcon size={24} round />
                      <ShareButtonText>{t("telegram")}</ShareButtonText>
                    </ShareIconWrapper>
                  </TelegramShareButton>
                </StyledButtonIcon>
                <StyledButtonIcon>
                  <WhatsappShareButton url={contentToShare} separator={"-"}>
                    <ShareIconWrapper
                      onClick={() =>
                        gtag.event({
                          action: "share_whatsapp",
                        })
                      }
                    >
                      <WhatsappIcon size={24} round />
                      <ShareButtonText>{t("whatsapp")}</ShareButtonText>
                    </ShareIconWrapper>
                  </WhatsappShareButton>
                </StyledButtonIcon>
              </ShareIconsItems>
            </ShareIcons>
          </StyledDialogContent>
        </SocialIconsContainer>
      </Dialog>
    </>
  );
};

export default HelpProject;
