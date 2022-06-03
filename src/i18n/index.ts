import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, uk } from "./languages/";

const options = {
  order: ["localStorage", "querystring", "navigator"],
  lookupQuerystring: "lng",
  lookupLocalStorage: "language",
};

export default function initLocalization() {
  return i18n.use(initReactI18next).init({
    detection: options,
    resources: {
      en,
      uk,
    },
    supportedLngs: ["en", "uk"],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}
