import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// 🇫🇷 Français
import translationFR from "./locales/fr/translation.json"
import formFR from "./locales/fr/form.json"
import optionsFR from "./locales/fr/options.json"
import countriesFR from "./locales/fr/options_countries.json"

// 🇬🇧 Anglais
import translationEN from "./locales/en/translation.json"
import formEN from "./locales/en/form.json"
import optionsEN from "./locales/en/options.json"
import countriesEN from "./locales/en/options_countries.json"

// 🇩🇪 Allemand
import translationDE from "./locales/de/translation.json"
import formDE from "./locales/de/form.json"
import optionsDE from "./locales/de/options.json"
import countriesDE from "./locales/de/options_countries.json"

i18n
  .use(initReactI18next)
  .init({
    lng: "fr", // langue par défaut
    fallbackLng: "en",
    ns: ["translation", "form", "options", "options_countries"],
    defaultNS: "translation",
    resources: {
      fr: {
        translation: translationFR,
        form: formFR,
        options: optionsFR,
        "options_countries": countriesFR
      },
      en: {
        translation: translationEN,
        form: formEN,
        options: optionsEN,
        "options_countries": countriesEN
      },
      de: {
        translation: translationDE,
        form: formDE,
        options: optionsDE,
        "options_countries": countriesDE
      }
    }
  })

export default i18n
