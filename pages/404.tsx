import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Routes } from "../src/config/routes";
import Container from "../src/components/Container";
import {
  PageNotFoundWrapper,
  PageNotFoundInfo,
  PageNotFoundTitle,
  PageNotFoundButton,
  PageNotFoundText,
  PageNotFoundImage,
} from "../src/components/common/styles";

export default function PageNotFound() {
  const { t } = useTranslation();
  return (
    <Container>
      <PageNotFoundWrapper>
        <PageNotFoundInfo>
          <PageNotFoundTitle>
            {t("oops")}
            <br />
            {t("errorPageNotFound")}
          </PageNotFoundTitle>
          <PageNotFoundText>{t("sorryGoBackHome")}</PageNotFoundText>
          <Link href={Routes.Root} passHref>
            <PageNotFoundButton>{t("backToHomepage")}</PageNotFoundButton>
          </Link>
        </PageNotFoundInfo>

        <PageNotFoundImage></PageNotFoundImage>
      </PageNotFoundWrapper>
    </Container>
  );
}
