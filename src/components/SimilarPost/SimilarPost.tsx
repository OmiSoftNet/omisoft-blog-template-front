import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import { isImagePath } from "../../helpers/isImagePath";
import { Routes } from "../../config/routes";
import { ClockIcon } from "../../svg";
import { Post as PostType } from "../../types/post";
import {
  DateText,
  DateWrapper,
  ImageWrapper,
  PostBody,
  PostFooter,
  PostText,
  PostTitle,
  PostWrapper,
  StyledImage,
  StyledLink,
  StyledImagePlaceholder,
} from "./styles";

type Props = {
  post: PostType;
};

const SimilarPost: React.FC<Props> = ({ post }) => {
  return (
    <PostWrapper>
      <ImageWrapper>
        <Link href={`${Routes.Blog}/${post.url}/`} passHref>
          <StyledLink>
            {isImagePath(post.imageUrl) ? (
              <StyledImage
                priority
                unoptimized
                src={post.imageUrl}
                alt={post.imageAlt}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            ) : (
              <StyledImagePlaceholder />
            )}
          </StyledLink>
        </Link>
      </ImageWrapper>
      <PostBody>
        <Link href={`${Routes.Blog}/${post.url}/`} passHref>
          <StyledLink>
            <PostTitle>{post.title}</PostTitle>
          </StyledLink>
        </Link>
        <PostText>{post.shortDescription}</PostText>
        <PostFooter>
          <DateWrapper>
            <ClockIcon />
            <DateText>
              {format(new Date(post.createdAt), "dd.MM.yyyy")}
            </DateText>
          </DateWrapper>
        </PostFooter>
      </PostBody>
    </PostWrapper>
  );
};

export default SimilarPost;
