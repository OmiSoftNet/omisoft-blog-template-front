import { useTranslation } from "react-i18next";
import PopUpDevelopment from "../PopUpDevelopment";
import Container from "../Container";

import { MainWrapper } from "./styles";
import { PopUpT as Props } from "../../types/popup";

const HomeContent: React.FC<Props> = ({ setPopup, popup }) => {
  const { t } = useTranslation();
  return (
    <>
      <MainWrapper>
        <Container>https://OmiSoft.net</Container>
      </MainWrapper>
      <PopUpDevelopment popup={popup} setPopup={setPopup} />{" "}
    </>
  );
};
export default HomeContent;
