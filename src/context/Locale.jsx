import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const LocaleContext = createContext();

const LocaleContextProvider = ({ children }) => {
  const [locale, setLocale] = useState("id");

  useEffect(() => {
    const locale = localStorage.getItem("locale");
    if (locale) {
      setLocale(locale);
    }
  }, []);

  const toggleLocale = () => {
    let selectedLocale;
    locale === "id" ? (selectedLocale = "en") : (selectedLocale = "id");
    localStorage.setItem("locale", selectedLocale);
    setLocale(selectedLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

LocaleContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LocaleContextProvider;
