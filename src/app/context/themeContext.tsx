'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";
import { ColorScheme } from "./types/ColorScheme";
import { ThemeContextType } from "./types/ThemeContextType"

const lightThemeColors: ColorScheme = {
  background: "#ffffff",  
  text: "#000000",  
  primary: "#0070f3",   
  secondary: "#f0f0f0",  
};

const darkThemeColors: ColorScheme = {
  background: "#1a1a1a", 
  text: "#ffffff",        
  primary: "#00c6ff",     
  secondary: "#333333",   
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const colors = theme === "light" ? lightThemeColors : darkThemeColors;
  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) { throw new Error("useTheme must be used within a ThemeProvider"); }
  return context;
};


const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      // Check for system preference
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDarkMode ? "dark" : "light";
    }
    return "light"; // default to light theme if no access to window
};
