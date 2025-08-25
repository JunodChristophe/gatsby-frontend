import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "fr",
    fallbackLng: "en",
    ns: ["translation", "form", "options", "options.countries"],
    defaultNS: "translation",
    backend: {
      loadPath: "/static/locales/{{lng}}/{{ns}}.json"
    }
  });

export default i18n;