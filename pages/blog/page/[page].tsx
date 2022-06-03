import React from "react";
import { useTranslation } from "react-i18next";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Grid } from "@mui/material";
import PaginationItem from "../../../src/components/Pagination";
import { Pagination } from "../../../src/types/post";
import Container from "../../../src/components/Container";
import { Paginate } from "../../../src/types/pagination";
import { Post as PostType } from "../../../src/types/post";
import Post from "../../../src/components/Post";
import { API_ROUTES } from "../../../src/config/apiRoutes";
import { API } from "../../../src/config/api";
import { StyledTitle } from "../../../src/components/common/styles";

type Props = {
  postsData: Paginate<PostType> | null;
};

const Blog: NextPage<Props> = ({ postsData }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const currentPage = router?.query.page || 1;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content=""
        ></meta>
        <title>Read Blog on OmiSoft Blog</title>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=""
        />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="" />
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
          currentPage={currentPage}
          postName="blog"
        />
      </Container>
    </>
  );
};

export async function getStaticPaths() {
  const { data } = await API.get(API_ROUTES.POSTS.ALL_POSTS());

  const totalPage = data.totalPage;

  let paths = [];
  for (let page = 1; page <= (totalPage ?? 1); page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { page } = params || {};

  try {
    const { data } = await API.get<Paginate<PostType>>(
      API_ROUTES.POSTS.ALL_POSTS(Pagination.limitPosts, page)
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
