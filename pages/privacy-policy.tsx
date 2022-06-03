import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import PrivacyPolicy from "../src/components/PrivacyPolicy";

const Privacy: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="Explore the best OmiSoft Blog app"
        ></meta>
        <title>{t("blogPrivacyPolicy")}</title>
        <meta name="image" content="../public/SocialPreview.jpg"></meta>
      </Head>
      <PrivacyPolicy />
    </div>
  );
};

export default Privacy;
