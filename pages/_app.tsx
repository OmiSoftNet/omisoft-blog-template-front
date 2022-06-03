import { CacheProvider, EmotionCache, Global } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import Head from "next/head";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import SupportUkraine from "../src/components/SupportUkraine";
import Cookies from "../src/components/Cookies";
import initLocalization from "../src/i18n";
import createEmotionCache from "../src/utils/createEmotionCache";
import theme from "../src/constants/theme";
import { globalStyles } from "../styles/styles";
import {
  MainWrapper,
  StyledContent,
  Cover,
} from "../src/components/common/styles";

initLocalization();

type Props = AppProps & {
  emotionCache?: EmotionCache;
};

const MyApp: React.FC<Props> = ({ Component, pageProps, emotionCache }) => {
  const AppComponent = Component as React.FC;
  const [popup, setPopup] = useState<boolean>(false);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="Explore the best OmiSoft Blog app"
        ></meta>
        <title>Read OmiSoft Blog Online</title>
      </Head>
      <CssBaseline>
        <CacheProvider value={emotionCache ?? createEmotionCache()}>
          <Global styles={globalStyles} />
          <ThemeProvider theme={theme}>
            {popup && <Cover></Cover>}
            <MainWrapper>
              <SupportUkraine top={true} />
              <Header />
              <StyledContent>
                <AppComponent
                  {...pageProps}
                  setPopup={setPopup}
                  popup={popup}
                />
              </StyledContent>
              <Cookies />
              <Footer />
            </MainWrapper>
          </ThemeProvider>
        </CacheProvider>
      </CssBaseline>
    </>
  );
};

export default MyApp;
