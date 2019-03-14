import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import english from "./assets/translation/en/common.json";
import portugues from "./assets/translation/pt/common.json";

const resources = {
    en: { translation: english },
    pt: { translation: portugues }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "pt",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

