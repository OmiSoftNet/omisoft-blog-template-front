export function languageStore() {
  const setLanguage = (lang: any) => localStorage.setItem("language", lang);
  const getLanguage = () => localStorage.getItem("language");

  return { setLanguage, getLanguage };
}
