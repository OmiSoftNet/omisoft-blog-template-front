import React from "react";
import { useTranslation } from "react-i18next";
import { Wrapper, Title, Button } from "./styles";
import { PopUpT as Props } from "../../types/popup";

const PopUpDevelopment: React.FC<Props> = ({ popup, setPopup }) => {
  const { t } = useTranslation();
  return (
    <>
      {popup && (
        <Wrapper>
          <Title>{t("underDevelopment")}</Title>
          <Button
            onClick={() => {
              setPopup(false);
            }}
          >
            ok
          </Button>
        </Wrapper>
      )}
    </>
  );
};

export default PopUpDevelopment;
