import { createContext, useContext, useEffect, useState } from "react";

export const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") == null ? "en" : localStorage.getItem("lang")
  );

  localStorage.setItem("lang", lang);

  return (
    <>
      <LangContext.Provider value={{ lang, setLang }}>
        {children}
      </LangContext.Provider>
    </>
  );
}
