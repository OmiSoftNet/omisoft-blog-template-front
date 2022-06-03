import React from "react";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import PaginationItem from "../../src/components/Pagination";
import Container from "../../src/components/Container";
import Post from "../../src/components/Post";
import { API } from "../../src/config/api";
import { API_ROUTES } from "../../src/config/apiRoutes";
import { Paginate } from "../../src/types/pagination";
import { Post as PostType } from "../../src/types/post";
import { StyledTitle } from "../../src/components/common/styles";

type Props = {
  postsData: Paginate<PostType> | null;
};

const Blog: NextPage<Props> = ({ postsData }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="description" content="Read our OmiSoft Blog"></meta>
        <title>OmiSoft Blog</title>
        <meta property="og:url" content="https://omisoft.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="" />
        <meta property="twitter:url" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Head>
      <Container>
        <StyledTitle>{t("omisoftBlog")}</StyledTitle>
        <Grid container spacing={3}>
          {postsData?.docs.map((post, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
        <PaginationItem
          pagesCount={postsData?.totalPages}
          currentPage="1"
          postName="blog"
        />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const { data } = await API.get<Paginate<PostType>>(
      API_ROUTES.POSTS.ALL_POSTS()
    );
    return {
      props: { postsData: data },
      revalidate: 60 * 10,
    };
  } catch (error) {
    return { props: { postsData: null } };
  }
};

export default Blog;
