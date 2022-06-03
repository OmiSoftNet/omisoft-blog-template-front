import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, ImageListItem, useMediaQuery } from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import { isImagePath } from "../../src/helpers/isImagePath";
import Container from "../../src/components/Container";
import SimilarPost from "../../src/components/SimilarPost";
import PopUpDevelopment from "../../src/components/PopUpDevelopment";
import HelpProject from "../../src/components/HelpProject";
import { Post as PostType, UrlInfo } from "../../src/types/post";
import { PopUpT } from "../../src/types/popup";
import { API } from "../../src/config/api";
import { API_ROUTES } from "../../src/config/apiRoutes";
import { ClockIcon } from "../../src/svg";
import style from "./markdown-styles.module.css";

import {
  TopicTitle,
  PostLine,
  StyledChip,
  StyledBlockPlaceholder,
  Content,
  StyledStack,
  Topic,
  TopicFooter,
  DateWrapper,
  TopicWrapper,
} from "../../src/components/common/styles";
import { DateText } from "../../src/components/Post/styles";
import { StyledTitle } from "../../src/components/common/styles";
import {
  DESKTOP_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
} from "../../src/constants/breakpoints";

interface Props extends PopUpT {
  postsData: PostType | null;
}
type Post = {
  postsData: PostType | null;
};

const Post: NextPage<Props> = ({ postsData, setPopup, popup }) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);
  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>{postsData?.seoTitle}</title>
        <meta name="description" content={postsData?.seoDesctiption} />

        <meta
          property="og:url"
          content={`https://omisoft.net/blog/${postsData?.url}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={postsData?.seoTitle} />
        <meta property="og:description" content={postsData?.seoDesctiption} />
        <meta property="og:image" content={postsData?.imageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="omisoft.net" />
        <meta
          property="twitter:url"
          content={`https://omisoft.net/blog/${postsData?.url}`}
        />
        <meta name="twitter:title" content={postsData?.seoTitle} />
        <meta name="twitter:description" content={postsData?.seoDesctiption} />
        <meta name="twitter:image" content={postsData?.imageUrl} />
      </Head>
      <Content>
        <Container>
          <TopicWrapper>
            <Topic>
              <TopicTitle>{postsData?.title}</TopicTitle>
              {isImagePath(postsData?.imageUrl || "") ? (
                <ImageListItem key={postsData?._id}>
                  <img
                    src={`${postsData?.imageUrl}`}
                    alt={postsData?.imageAlt}
                    title={postsData?.seoTitle}
                  />
                </ImageListItem>
              ) : (
                <StyledBlockPlaceholder />
              )}
              <div className={style.reactMarkDown}>
                <ReactMarkdown linkTarget="_blank">
                  {postsData?.topic || ""}
                </ReactMarkdown>
              </div>
              <PostLine />
              <TopicFooter>
                <StyledStack direction="row">
                  {postsData?.tags.map((tag: string, index) => (
                    <StyledChip key={index}>{tag}</StyledChip>
                  ))}
                </StyledStack>
                <DateWrapper>
                  <ClockIcon />
                  <DateText>
                    {postsData
                      ? format(new Date(postsData.createdAt), "dd.MM.yyyy")
                      : ""}
                  </DateText>
                </DateWrapper>
              </TopicFooter>
            </Topic>

            {!!postsData?.similarArticles.length && (
              <>
                <StyledTitle>{t("similarArticles")}</StyledTitle>
                <Grid container spacing={3}>
                  {postsData?.similarArticles.map((post, index) => {
                    return (
                      <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
                        <SimilarPost post={post} />
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            )}
          </TopicWrapper>
        </Container>
        <HelpProject />
      </Content>
      <PopUpDevelopment popup={popup} setPopup={setPopup} />
    </>
  );
};

export async function getStaticPaths() {
  const { data } = await API.get(API_ROUTES.POSTS.ALL_POSTS_URL());

  const paths = data.map((post: UrlInfo) => ({
    params: { url: post.url },
  }));

  return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticProps<Post> = async ({ params }) => {
  try {
    const { data } = await API.get<PostType>(
      API_ROUTES.POSTS.GET_BY_URL(params?.url)
    );
    return { props: { postsData: data }, revalidate: 60 * 10 };
  } catch (error) {
    return { notFound: true };
  }
};

export default Post;
