import React, { ReactNode } from "react";
import { StyledContainer } from "./styles";

type Props = {
  fullHeight?: boolean;
  children: ReactNode;
};

const Container: React.FC<Props> = ({ children, fullHeight = false }) => {
  return (
    <StyledContainer className={fullHeight ? "fullHeight" : ""}>
      {children}
    </StyledContainer>
  );
};

export default Container;
