import { useRouter } from "next/router";
import { createContext, useEffect, useRef, useState } from "react";

const initialMode = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const localStorageData = window.localStorage.getItem("color-theme");
    if (typeof localStorageData === "string") {
      return localStorageData;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  // Default Theme
  return "light";
};

interface themeStructure {
  theme: string;
  changeTheme: (selected?: string) => void;
}
const initialTheme: themeStructure = {
  theme: initialMode(),
  changeTheme: () => "",
};

export const ThemeContext = createContext<themeStructure>(initialTheme);

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(initialTheme.theme);

  const router = useRouter();

  // Save theme on LocalStorage
  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  // Modify Theme
  const changeTheme = (selected?: string) => {
    if (selected) {
      setTheme(selected);
    }
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (theme === "light" && router.asPath !== "/") {
      setTheme("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
