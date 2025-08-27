import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Theme, ThemeType } from "../types/theme";
import { themes } from "../styles/themes";

interface ThemeContextType {
  theme: Theme;
  themeType: ThemeType;
  toggleTheme: () => void;
  setTheme: (themeType: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "@volstora_app_theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>("defaultTheme");
  const [theme, setCurrentTheme] = useState<Theme>(themes.defaultTheme);

  // Загрузка темы из AsyncStorage при инициализации
  useEffect(() => {
    loadTheme();
  }, []);

  // Обновление текущей темы при изменении типа
  useEffect(() => {
    setCurrentTheme(themes[themeType]);
  }, [themeType]);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (
        savedTheme &&
        (savedTheme === "defaultTheme" || savedTheme === "primaryTheme")
      ) {
        setThemeType(savedTheme as ThemeType);
      }
    } catch (error) {
      console.error("Ошибка загрузки темы:", error);
    }
  };

  const saveTheme = async (newThemeType: ThemeType) => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newThemeType);
    } catch (error) {
      console.error("Ошибка сохранения темы:", error);
    }
  };

  const setTheme = (newThemeType: ThemeType) => {
    setThemeType(newThemeType);
    saveTheme(newThemeType);
  };

  const toggleTheme = () => {
    const newThemeType =
      themeType === "defaultTheme" ? "primaryTheme" : "defaultTheme";
    setTheme(newThemeType);
  };

  const contextValue: ThemeContextType = {
    theme,
    themeType,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme должен использоваться внутри ThemeProvider");
  }
  return context;
};
