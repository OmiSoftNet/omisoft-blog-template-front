import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, CookiesBox, Button, CoockieImg } from "./styles";

const Cookies: React.FC = () => {
  const { t } = useTranslation();
  const [allowedCookies, setAllowedCookies] = useState(true);
  useEffect(() => {
    return setAllowedCookies(
      localStorage?.getItem("allowedCookies") === "true"
    );
  }, []);
  return (
    <>
      {allowedCookies ? (
        ""
      ) : (
        <CookiesBox>
          <CoockieImg src="/images/coockie.svg" alt="cookie" />
          <Text>{t("cookieText")}</Text>
          <Button
            onClick={() => {
              setAllowedCookies(true);
              localStorage.setItem("allowedCookies", "true");
            }}
          >
            {t("ok")}
          </Button>
        </CookiesBox>
      )}
    </>
  );
};

export default Cookies;
