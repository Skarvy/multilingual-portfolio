import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isSpanish, setIsSpanish] = useState(true); // Puedes inicializarlo con el valor inicial que desees

  const toggleLanguage = () => {
    setIsSpanish((prevIsSpanish) => !prevIsSpanish);
  };

  return (
    <LanguageContext.Provider value={{ isSpanish, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe ser utilizado dentro de un LanguageProvider");
  }
  return context;
};
