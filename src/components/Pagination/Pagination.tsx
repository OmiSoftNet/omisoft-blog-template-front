import { Pagination } from "@mui/material";
import Link from "next/link";
import React from "react";
import { StyledLink } from "../../components/common/styles";
import Container from "../../components/Container";
import { Pagination as Paginate } from "../../types/post";
import {
  PaginationWrapper,
  StyledPaginationItem,
} from "../../components/common/styles";

type Props = {
  pagesCount: number | undefined;
  currentPage: string | number | string[];
  postName: string;
};

const PaginationContent: React.FC<Props> = ({
  pagesCount,
  currentPage,
  postName,
}) => {
  if (!pagesCount || !postName) {
    return null;
  }

  return (
    <Container>
      <PaginationWrapper>
        {(pagesCount ?? 0) > 1 && (
          <Pagination
            page={currentPage ? +currentPage : Paginate.firstPage}
            hideNextButton
            hidePrevButton
            count={pagesCount}
            siblingCount={0}
            renderItem={(item) => (
              <Link href={`/blog/page/${item.page}`} passHref>
                <StyledLink>
                  <StyledPaginationItem {...item} />
                </StyledLink>
              </Link>
            )}
          />
        )}
      </PaginationWrapper>
    </Container>
  );
};

export default PaginationContent;
