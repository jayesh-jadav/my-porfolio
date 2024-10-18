import { createTheme } from "@mui/material";
import { useMemo } from "react";

export const colors = {
  primary: "#0F0F0F", // Jet black for the main background and primary sections
  secondary: "#00FF9F", // Neon green for secondary buttons and highlights
  accent: "#1E90FF", // Bright blue for action buttons and interactive elements
  background: "#141414", // Dark gray for general background
  surface: "#232323", // Slightly lighter gray for surfaces like cards
  text: "#E0E0E0", // Off-white for readable text
  textSecondary: "#9E9E9E", // Light gray for secondary text
  error: "#FF4C4C", // Vivid red for error messages
  white: "#FFFFFF", // Pure white for contrast
  gradient: "linear-gradient(45deg, #00FF9F, #1E90FF)", // Neon green to blue gradient
};

const Theme = () => {
  return useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: colors.primary,
          },
          secondary: {
            main: colors.secondary,
          },
          accent: {
            main: colors.accent,
          },
          background: {
            default: colors.background,
          },
          text: {
            primary: colors.text,
          },
        },
        components: {
          MuiIconButton: {
            styleOverrides: {
              root: {
                color: colors.primary,
                fontFamily: `EuropaRegular !important`,
                transition: "500ms",
                "&:hover": {
                  backgroundColor: colors.primary,
                  color: colors.white,
                },
                "@media (hover: none)": {
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: `${colors.primary} !important`,
                  },
                },
              },
            },
          },
        },
      }),
    [] // Recompute theme when state changes
  );
};

export default Theme;
