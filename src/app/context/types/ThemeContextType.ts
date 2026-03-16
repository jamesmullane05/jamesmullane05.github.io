import { ColorScheme } from "./ColorScheme";
export interface ThemeContextType {
  theme: Theme;
  colors: ColorScheme;
  toggleTheme: () => void;
}