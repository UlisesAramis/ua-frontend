const dictionaries = {
  en: () => import("../dictionaries/en.json").then((m) => m.default),
  es: () => import("../dictionaries/es.json").then((m) => m.default),
};

export const getDictionary = async (lang: string) => {
  if (lang !== "en" && lang !== "es") {
    return dictionaries["es"]();
  }

  return dictionaries[lang]();
};
